import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./component/auth/landing";
import Header from "./component/header/header";
import Register from "./component/auth/Register";
import display from "./component/display/display";
import Login from "./component/auth/login";
import Profile from "./component/profile/profile";
import Payment from "./component/booking/payment";
import Details from "./component/details/details";
import Service from "./component/details/service"
import { Provider } from "react-redux";
import setAuthToken from "./utilis/setAuthToken";
import { loadUser } from "./actions/user";
import Dashboard from "./component/dashboard/Dashboard";
import PrivateRoute from "./component/privateRoute/PrivateRoute";
import store from "./store";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router  history={history}>
        <Fragment>
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/Login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/display" component={display} />
              <PrivateRoute exact path="/header" component={Header} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/payment" component={Payment} />
              <Route exact path="/details" component={Details} />
              <Route exact path="/service" component={Service} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};
App.propTypes = {};

export default App;
