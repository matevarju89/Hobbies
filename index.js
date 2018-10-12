//import dependencies

const express=require("express");
const cors=require("cors");
const mysql=require("mysql");
const bodyParser=require("body-parser");

/*const createapi=require("./Routes/createapi");*/

const events=require("./routes/events");

const app=express();

//configuring middleware

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/*app.use("/create", createapi);*/


// connect to MySql database

const con=mysql.createConnection({
	host:"localhost",
	user:"root",
	database:"hobbies"
});

con.connect(err=>{
	if(err){return err};
});

//Use routes
app.use("/events", events(con));

//Try-out
app.get("/", (req,res)=>{
	res.send("Haliho")
});

//setting-up port 

const port=process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Server running on port ${port}`));	

