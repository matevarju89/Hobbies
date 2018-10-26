const JwtStrategy=require("passport-jwt").Strategy;
const ExtractJwt=require("passport-jwt").ExtractJwt;
//const mongoose=require("mongoose");
//const User= mongoose.model("users");
const keys=require("../config/keys");

const opts={};
opts.jwtFromRequest=ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey=keys.secretOrKey;

module.exports=(passport, connection) =>{
	passport.use(
		new JwtStrategy(opts,(jwt_payload,done) =>{
			const sqlIdQuery=`SELECT * FROM users WHERE userID=${jwt_payload.id}`;
			connection.query(sqlIdQuery, (err,result)=>{
				if(err) throw err;
				if (result[0]){
					return done(null,result[0]);
				}
				return done(null,false);
			});
		}));
};
