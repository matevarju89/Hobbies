//importing dependencies

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//event creation form component

export default class Create extends React.Component{
	
	constructor(props) {
    super(props);
    this.state = {
      activityName:"",
      location:"",
      timing:""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  handleSubmit(){

    const transfer={
        activityName:this.state.activityName,
        location:this.state.location,
        timing:this.state.timing
        }
		axios.post("http://localhost:5000/events/create",{transfer}
      )
		  .then(function (response) {
		    alert(response.data);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
  }

  // rendering Material UI form
  
	render() {
    return (
      <div id="createevents">
        <div id="eventsform">
        <TextField name="activityName" type="text" label="Event Name" autoComplete="off" onChange={this.handleInputChange} />
        <br/>
        <br/>
        <TextField name="location" type="text" label="Location" autoComplete="off" onChange={this.handleInputChange} />
        <br/>
        <br/>
        <TextField name="timing" type="text" label="Timing" autoComplete="off" onChange={this.handleInputChange} />
        <br/>
        <br/>
        <br/>
        <Button variant="outlined" id="submitevent" onClick={this.handleSubmit}>Submit</Button>
      </div>
      </div>
    );
  }
}