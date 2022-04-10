import React from "react";
import PropTypes from "prop-types";
import "./landing.css";
import { Link } from "react-router-dom";

const landing = (props) => {
  return (
    <section className="Landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">URBAN SERVICE</h1>
          <div className="buttons">
            <ul className="navbar">
              <li className="nav-bar"><Link to="/register">SignUp</Link></li>
              <li className="nav-bar"><Link to="login">Login</Link></li>
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

landing.propTypes = {};

export default landing;
