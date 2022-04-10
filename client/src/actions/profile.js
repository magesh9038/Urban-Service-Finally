import axios from "axios";
import { useRouteMatch } from "react-router";
import { setAlert } from "./alert";
import { GET_PROFILE, PROFILE_ERROR } from "./types";
export let getallservices = () => async (dispatch) => {
  console.log("nvjnjnj");
  try {
    
    let res = await axios.get("http://localhost:1000/api/service");
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
  
};
