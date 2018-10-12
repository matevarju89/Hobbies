//Importing dependencies 

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Events from './Events';
import Create from './Create';
import Profile from './Profile';
import About from './About';
import {
  Route,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";
import {Provider} from 'react-redux';
import store from '../store/index';

//Importing styles

import "./main.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


//rendering the whole Landing with react router and redux provider

export default class Main extends React.Component{
	render(){
		return(
			<Provider store={store}>
			<Router>
				<div className="container">
					<ul className="header">
		            <li><NavLink exact to="/">Events</NavLink></li>
		            <li><NavLink to="/create">Create an event</NavLink></li>
		            <li><NavLink to="/profile">My Hobbies</NavLink></li>
		            <li><NavLink to="/about">About</NavLink></li>
		            <FontAwesomeIcon id="childicon" icon='child' size="2x" color="green"/>

		          	</ul>
					
		          	<div className="imagebox">
		          	</div>
         
		          	<div className="content">
           			   	<Route exact path="/" component={Events}/>
            			<Route path="/create" component={Create}/>
            			<Route path="/profile" component={Profile}/>	
            			<Route path="/about" component={About}/>
          			</div>

	          	</div>
	        </Router>
	        </Provider>

			)
	}
}
