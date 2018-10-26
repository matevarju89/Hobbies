//import dependencies
const keys=require("../config/keys");
const express = require("express");
const router=express.Router();
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const passport=require("passport");

//Input validation
const validateRegisterInput=require("../validation/register");
const validateLoginInput=require("../validation/login");
//export router with Mysql connection

module.exports = (connection) =>{


	//@access public
	//@route POST users/register
	//@desc register new user

	router.post("/register", (req,res)=>{

		//input validation

		const{errors,isValid}=validateRegisterInput(req.body);

		if(!isValid){
		return res.status(400).json(errors);
		}

		//Parsing Query param

		const email=req.body.email;
		let password=req.body.password;
		const name=req.body.name;

		//Check, if user already exists

		const sqlSearchEmail=`SELECT * FROM users WHERE email="${email}"`;
		connection.query(sqlSearchEmail,(err,result)=>{

			if(err) throw err;

			//if exists, error
			if (result[0]){
				errors.email="Email already exists"
				return res.status(400).json(errors);
				};

			//if it doesn't exist, hash password
			//Insert new user

			bcrypt.genSalt(10, (err,salt)=>{
				bcrypt.hash(password, salt, (err,hash)=> {
					if (err) throw err;
					password=hash;
					const sqlInsertUser="INSERT INTO users (name, email, password) VALUE(?,?,?)";
					connection.query(sqlInsertUser,[name,email,password],(err,result)=>{
						if(err) throw err;
						return res.json({
							update:result,
							user:{
								email,
								name,
								password
							}
						});
					})
				})
			});
				
		});
	})



		//@access Public
		//@route GET users/login
		//@desc login/return jwt

	router.post("/login", (req,res)=>{

		const{errors,isValid}=validateLoginInput(req.body);

		//Input validation
		if(!isValid){
		return res.status(400).json(errors);
		}

		//Parsing query

		const email=req.body.email;
		const password=req.body.password;

		//Check for user
		const sqlSearchEmail=`SELECT * FROM users WHERE email="${email}"`;
		connection.query(sqlSearchEmail,(err,result)=>{

			if(err) throw err;

			//if doesn't exist, error
			if (!result[0]){
				errors.email="User not found"
				return res.status(400).json(errors);
				};

			//user info

			const user=result[0];

			//check password
			bcrypt.compare(password, user.password)
				.then(isMatch=>{
					if(isMatch){
						const payload={id: user.userID, name: user.name};

						//sign token
						jwt.sign(payload, keys.secretOrKey, {expiresIn: 3600}, (err,token)=>{
							if(err) throw err;
							res.json({
								success:true,
								token: "Bearer " + token
							});

						});

					} else {
						errors.password="Password incorrect";
						return res.status(400).json(errors);
					}
					
				});
		});
	});

	// @access Private
	// @route GET api/users/current
	// @desc return current user
	router.get("/current", passport.authenticate("jwt", {session:false}), (req,res)=>{
		res.json({
			id:req.user.userID,
			name:req.user.name,
			email:req.user.email
		});

	})


return router;

}