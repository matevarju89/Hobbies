//importing dependencies

import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from "../reducers/index";
import thunk from 'redux-thunk';

//thunk middleware to be able to use actions as functions

const middleware=[thunk];

const initialState={};

//creating store with thunk and redux chrome dev tools

const store=createStore(rootReducer, initialState, compose(applyMiddleware(...middleware),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	));

export default store;