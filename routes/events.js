//import dependencies

const express = require("express");
const router=express.Router();

//initialize the API as function in order to be able to use global mysql connection 


module.exports = (connection) =>{
    
    
	// @access Public
	// @route GET /events/all
	// @desc return all events

	router.get("/all",(req,res)=>{
		const select_all_hobbies="SELECT * FROM hobby";
		connection.query(select_all_hobbies,(err,result)=>{
			if(err){
				return res.send(err)
			}
			else{
				return res.json({
					events:result
				})
			}

		});
	});


	// @access Private
	// @route POST /events/create
	// @desc create new event 

	router.post("/create",(req,res)=>{
		let activityName=req.body.transfer.activityName;
	    let location=req.body.transfer.location;
	    let timing=req.body.transfer.timing;
	    const sqlquery="INSERT INTO hobby(activityName, location, timing) VALUES (?,?,?)";
		connection.query(sqlquery,[activityName,location,timing],(err,result)=>{
			if(err){
				return res.send(err)
			}
			else{
				//return res.send("updated")
				return res.json({
					success: "updated",
					event:req.body.transfer
				})
				
				}
			});
		/*test-purposes res.send(activityName + ' ' + description)*/

		});

	// @access Private
	// @route DELETE /events/delete
	// @desc delete eisting event 

	router.delete("/delete/:ID",(req,res)=>{
		const ID=req.params.ID
		//return res.json({success:ID})
		const deleteevent=`DELETE FROM hobby WHERE activityId=${ID}`;
		connection.query(deleteevent,(err,result)=>{
			if(err){
				return res.send(err)
			}
			else{
				return res.json({
					success:"deleted",
					ID: ID
				})
			}

		});
	});




	  return router;

}



//module.exports=router;