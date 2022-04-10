import axios from "axios";
import { setAlert } from "./alert";
import prefixUrl from "../config/config";
import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  USER_LOADED,
  AUTH_ERROR,
  GET_PROFILE,
  PROFILE_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  GET_ALLPROFILE,
  ALLPROFILE_ERROR,
} from "./types";
import setAuthToken from "../utilis/setAuthToken";
import { Profiler } from "react";
export let loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    let res = await axios.get("http://localhost:1000/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
export let register =
  ({ EmailId, MobileNo, Pincode, Password, Password2 }) =>
  async (dispatch) => {
    let config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };
    let body = {
      EmailId,
      MobileNo,
      Pincode,
      Password,
      Password2,
    };
    console.log(body);
    try {
      let res = await axios.post(
        "http://localhost:1000/api/users",
        body,
        config
      );

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
    } catch (error) {
     
      dispatch({
        type: REGISTER_FAILURE,
      });
    }
  };
export let detail = (Address, ServiceTypes,loc) => async (dispatch) => {
  let config = {
    Headers: {
      "Content-Type": "application/json",
    },
  };
  let body = {
    Address,
    ServiceTypes,
    loc
  };

  try {
    let res = await axios.post(
      "http://localhost:1000/api/users/list",
      body,
      config
    );
    dispatch({
      type: GET_ALLPROFILE,
      payload: res.data,
    });
   console.log(res.data);
  } catch (error) {
    let errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "primary")));
    }
    dispatch({
      type: REGISTER_FAILURE,
    });
  }
};
export let login = (EmailId, Password) => async (dispatch) => {
  let config = {
    Headers: {
      "Content-Type": "application/json",
    },
  };
  let body = {
    EmailId,
    Password,
  };
  console.log(body);
  try {
    let res = await axios.post(
      "http://localhost:1000/api/users/login",
      body,
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    let errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "primary")));
    }
    dispatch({
      type: LOGIN_FAILURE,
    });
  }
};
export let profile = (userId) => async (dispatch) => {
  try {
    let res = await axios.get(`api/users/user/${userId}`);
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
