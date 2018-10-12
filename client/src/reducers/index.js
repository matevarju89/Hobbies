//import dependencies

import { SET_ALL_HOBBIES } from '../constants/action-types';


//configuring initial state

const initialState = {
  hobbies: []
};

//defining event reducer

const rootReducer = (state = initialState, action) =>{
  switch (action.type) {
  	case SET_ALL_HOBBIES:
  		return {
  			...state,
  			hobbies:action.payload
  		}
    
    default:
      return state;

  }
};
export default rootReducer;