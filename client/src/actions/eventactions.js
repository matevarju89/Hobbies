//import dependencies
import {SET_ALL_HOBBIES} from "../constants/action-types";
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

//export const clearEvent = (ID) => dispatch =>{
	//axios.delete("http://localhost:5000", {
	//ID: ID
	//})
     // .then(res => alert(res.data)
      	//);
       
  // };
