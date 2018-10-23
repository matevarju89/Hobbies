//import dependencies

import { SET_ALL_HOBBIES, DELETE_EVENT, CREATE_EVENT } from '../constants/action-types';


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

    case DELETE_EVENT:
       return {
        ...state,
        hobbies:state.hobbies.filter((data) => data.activityId != action.payload)
      }
    
    case CREATE_EVENT:
      return {
        ...state,
        hobbies:state.hobbies.concat(action.payload)
      }

    default:
      return state;

  }
};
export default rootReducer;