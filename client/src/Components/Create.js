//importing dependencies

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createEvent } from '../actions/eventactions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//event creation form component

class Create extends React.Component{
	
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


  async handleSubmit(){

    const transfer={
        activityName:this.state.activityName,
        location:this.state.location,
        timing:this.state.timing
        }

   await this.props.createEvent(transfer);

    this.setState({
          activityName: "",
          location:"",
          timing:""
        });

    alert("updated");

  };

  // rendering Material UI form
  
	render() {
    return (
      <div className="contain">
        <div className="imagebox">
        </div>
        <div id="createevents">
          <div id="eventsform">
          <TextField name="activityName" type="text" label="Event Name" autoComplete="off" onChange={this.handleInputChange} value={this.state.activityName} />
          <br/>
          <br/>
          <TextField name="location" type="text" label="Location" autoComplete="off" onChange={this.handleInputChange} value={this.state.location}/>
          <br/>
          <br/>
          <TextField name="timing" type="text" label="Timing" autoComplete="off" onChange={this.handleInputChange} value={this.state.timing}/>
          <br/>
          <br/>
          <br/>
          <Button variant="outlined" id="submitevent" onClick={this.handleSubmit}>Submit</Button>
          </div>
        </div>
      </div>
    );
  }
}


Create.propTypes={
  createEvent: PropTypes.func.isRequired
};

export default connect(null, {createEvent})(Create);