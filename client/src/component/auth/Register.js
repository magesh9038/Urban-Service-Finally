import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import header from "../header/header";
import { LOGIN_FAILURE } from "../../actions/types";
import { register } from "../../actions/user";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
const Register = ({ setAlert, register }) => {
  let [formData, setFormData] = useState({
    EmailId: "",
    MobileNo: "",
    Pincode: "",
    Password: "",
    Password2: "",
  });

  const { EmailId, MobileNo, Pincode, Password, Password2 } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    console.log(EmailId, MobileNo, Pincode, Password);
    e.preventDefault();
    if (Password !== Password2) {
      setAlert("passwords does not work go with someother please", "danger");
    } else {
      register({ EmailId, MobileNo, Pincode, Password, Password2 });
    }
  };
  return (
    <Fragment>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            {/* <img
              src="https://scontent-bom1-2.xx.fbcdn.net/v/t1.6435-9/50933597_2260255480856103_8462898186757865472_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=goCM1oShOxUAX_Glntm&tn=q7oP6gqNiabZsvxe&_nc_ht=scontent-bom1-2.xx&oh=24631776f851e4c95b273bcc9c36986a&oe=616C63C6"
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            /> */}
            Urban Service
          </a>
        </div>
      </nav>
      <h1 className="large text-danger">
        <i class="fa-solid fa-right-to-bracket"></i>Sign Up
      </h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
      <div class="form-floating">
  <input type="MobileNo" class="form-control" id="floatingPassword" placeholder="MobileNo" name="MobileNo"  value={MobileNo}
            onChange={(e) => onChange(e)}
            required/>
  <label for="floatingPassword">MobileNo</label>
</div>
<div class="form-floating">
  <input type="Pincode" class="form-control" id="floatingPassword" placeholder="Pincode" name="Pincode"  value={Pincode}
            onChange={(e) => onChange(e)}
            required/>
  <label for="floatingPassword">Pincode</label>
</div>
        <div class="form-floating mb-3">
  <input type="EmailId" class="form-control" id="floatingInput" placeholder="EmailId"   name="EmailId"
            value={EmailId}
            onChange={(e) => onChange(e)}
            required/>
  <label for="floatingInput">EmailId</label>
</div>
<div class="form-floating">
  <input type="Password" class="form-control" id="floatingPassword" placeholder="Password" name="Password"  value={Password}
            onChange={(e) => onChange(e)}
            required/>
  <label for="floatingPassword">Password</label>
</div>
<div class="form-floating">
  <input type="Password2" class="form-control" id="floatingPassword" placeholder="Password2" name="Password2" value={Password2}
            onChange={(e) => onChange(e)}
            required/>
  <label for="floatingPassword">Password2</label>
</div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
     
    </Fragment>
  );
};
Register.prototype = {
  setAlert: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
};
export default connect(null, { setAlert, register })(Register);
