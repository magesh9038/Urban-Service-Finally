import React, { Fragment } from "react";
import PropTypes from "prop-types";

const payment = (props) => {
  return (
    <Fragment>
      <div className="payment">
        <h2>URBAN SERVICE PAYMENT</h2>
        <form method="POST">
          <h4>Account</h4>
          <div className="input-group">
            <div className="input-box">
              <input
                type="text"
                placeholder="ENTER NAME"
                required
                className="name"
              ></input>
              <i class="fas fa-user"></i>
            </div>
          </div>

     
          <div className="input-group">
            <div className="input-box">
              <h4>Payment Details</h4>
              <input
                type="radio"
                name="pay"
                id="bc1"
                checked
                class="radio"
              ></input>
              <label for="bc1">
                <span>
                  <i class="fab fa-cc-visa"></i>
                  Credit Card
                </span>
              </label>
              <input type="radio" name="pay" id="bc2" class="radio"></input>
              <label for="bc2">
                <span>
                  <i class="fab fa-cc-paypal"></i>
                  Debet Card
                </span>
              </label>
            </div>
          </div>
          <div className="input-group">
            <div className="input-box">
              <input
                type="tel"
                placeholder="Card Number"
                required
                className="name"
              ></input>
              <i class="far fa-credit-card"></i>
            </div>
          </div>
          <div className="input-group">
            <div className="input-box">
              <input
                type="tel"
                placeholder="CVV Number"
                required
                className="name"
              ></input>
              <i class="fas fa-user"></i>
            </div>
          </div>
          <div className="input-box">
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
            <select>
              <option>2015</option>
              <option>2016</option>
              <option>2017</option>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
            </select>
          </div>
          <button type="button" class="btn btn-primary btn-lg">
           Pay Know
          </button>
        </form>
      </div>
    </Fragment>
  );
};

payment.propTypes = {};

export default payment;
