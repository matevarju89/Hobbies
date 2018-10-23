//import dependencies
import {SET_ALL_HOBBIES, DELETE_EVENT, CREATE_EVENT} from "../constants/action-types";
import axios from 'axios';

//action creator to get existing events
export const getAllHobbies = () => dispatch =>{
axios.get("http://localhost:5000/events/all")
      .then(res => {
       dispatch({
        type: SET_ALL_HOBBIES,
        payload: res.data.events
      }) 
   });
};


//action for deleting an existing event
export const clearEvent = (ID) => dispatch =>{
	axios.delete("http://localhost:5000/events/delete/" + ID) //, {params: {ID: ID}})
     .then(res =>{
      //return alert(res.data.success);
        dispatch({
        type: DELETE_EVENT,
        payload: res.data.ID
      }) 
      	});
       
  };


//action for posting new events
export const createEvent = (transfer) => dispatch =>{
  axios.post("http://localhost:5000/events/create",{transfer})
      .then(res => {
       dispatch({
        type: CREATE_EVENT,
        payload: res.data.event
      }) 
   });
};
