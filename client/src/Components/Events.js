//Importing dependencies and styles

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Square2 from './Square2';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllHobbies } from '../actions/eventactions';
import './events_style.css';

//Event component with highlighted event data

class Events extends Component{
  constructor(){
    super();
    this.state={
      hobbies:[]
    };
  }

//Iniate props download via Redux

componentDidMount(){
  this.props.getAllHobbies();
}

//After Redux props download render components

componentWillReceiveProps(nextProps) {
    if (nextProps.hobbies) {
      this.setState({ hobbies: nextProps.hobbies });
    }
  }

//render updated events state with functional operation

render(){
  
  return(
      <div className="gridbox">
      {this.state.hobbies.map((dynamicComponent, i) => <Square2
       key = {i} componentData = {dynamicComponent}/>)}
      </div>

  );
}
}

//Setting up Proptypes

Events.propTypes = {
  getAllHobbies: PropTypes.func.isRequired,
  hobbies: PropTypes.object.isRequired,
  
};

//Configuring props mapping

const mapStateToProps = state => ({
  hobbies: state.hobbies,
  
});

//exporting element and connecting with redux

export default connect(mapStateToProps, { getAllHobbies })(Events);