import React, { Component } from 'react';

import './square_style.css';

import ReactDOM from 'react-dom';

export default class Square extends React.Component{
  
render(){
  return(
    <div className="squarebox">
      <div className="Desc_container">
        <p className="organizer">iujjeioaugi</p>
        <p className="eventname">{this.props.componentData.Name}</p> 
        <p className="timing">{this.props.componentData.Timing}</p> 
        <p className="location">{this.props.componentData.Location}</p> 
      </div>
    </div>
  );
}
}


