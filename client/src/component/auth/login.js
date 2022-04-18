import React, { Fragment, useState } from "react";
import { Link,  } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/user";
import PropTypes from "prop-types";
import "./login.css"
const Login = ({ login, history }) => {
  const [state, setstate] = useState({
    EmailId: "",
    Password: "",
  });
  let { EmailId, Password } = state;
  const onChange = (e) =>
    setstate({ ...state, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    history.push('/display');
    login(EmailId, Password);
  };
  return (
    <Fragment>
      <img className="image" src="https://zetaglobal.com/wp-content/uploads/2020/04/AdobeStock_237944494-scaled-1-960x640.jpeg"/>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> SignIn account
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="EmailId" class="form-control" 
     placeholder="EmailId"
     name="EmailId"
     value={EmailId}
     onChange={(e) => onChange(e)}
     required
    id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
        <div className="form-group">
        <input type="Password" class="form-control" 
     placeholder="Password"
     name="Password"
     minLength="6"
     value={Password}
     onChange={(e) => onChange(e)}
     required
    id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>

        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Dont't have an account? <Link to="/Register">Sign Up</Link>
      </p>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}
let mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
