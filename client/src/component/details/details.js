import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { detail } from "../../actions/user";
import "./details.css";
const Details = ({ detail }) => {
  const [state, setstate] = useState({
    Address: "",
    ServiceTypes: "",
    
  });

  let { Address, ServiceTypes,loc } = state;
  const onChange = (e) =>
    setstate({ ...state, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    // console.log("vsnjvnsjfnv");
    e.preventDefault();
    if (navigator.geolocation) {
    let loc =  navigator.geolocation.getCurrentPosition(success);
    console.log(loc);
    } else {
      console.log("Not Working");
    }
    
  };

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(latitude,  longitude);
    let loc = {lat: latitude,
      long: longitude}
    detail(Address, ServiceTypes, loc);
  }
  // let button = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition();
  //   }
  //    else { 
  //    console.log("Not Working");
  //   }
    
  // }
  return (
    <Fragment>
  
      <h1 className="large text-primary">Address</h1>
      <p className="lead">
        <i className="fas fa-user"></i>Delivery Address
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="Address"
            placeholder="Address"
            name="Address"
            value={Address}
            class="form-control"
            onChange={(e) => onChange(e)}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="ServiceTypes"
            placeholder="ServiceTypes"
            name="ServiceTypes"
            value={ServiceTypes}
            onChange={(e) => onChange(e)}
            required
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Submit" />
        {/* <button onClick={button} class="btn btn-primary">
          Add Location
        </button>
   
      {state.map((data)=> {
        return (
          <ol class="list-group list-group-numbered">
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">{data}</div>
            </div>
            <span class="badge bg-primary rounded-pill">
            <i class="far fa-check-circle" onClick={() => button()}>
              
            </i>
            </span>
           
          </li>
        </ol>
        
        )
      })} */}
         </form>
      {/* <p className="my-1">
        Dont't have an account? <Link to="/Register">Sign Up</Link>
      </p> */}
    </Fragment>
  );
};

Details.propTypes = {
  detail: PropTypes.object.isRequired,
  
};
let mapStateToProps = (state) => ({
  isAuthenticated: state.user,
});

export default connect(mapStateToProps, { detail })(Details);
