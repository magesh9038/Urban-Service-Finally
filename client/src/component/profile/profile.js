import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const profile = () => {
  return (
    <Fragment>
      <div className="bg-light">
        <div class="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 mt-5 pt-5">
              <div className="row z-depth-3">
                <div className="col-sm-4 bg-info rounded-left">
                  <div className="card-block text-center text-white">
                    <i className="fas fa-user-tie fa-7x mt-5"> </i>
                    <h2 className="font-weight-bold mt-4">Magesh</h2>
                    <p>Plumber</p>
                    <i className="far fa-edit fa-2x mb-4"></i>
                  </div>
                </div>
                <div className="col-sm-8 bg-white rounded-right">
                  <h3 className="mt-3 text-center">Information</h3>
                  <div className="row">
                    <hr
                      style={{
                        color: "black",
                        backgroundColor: "black",
                        height: 2.5,
                        width: 593,
                      }}
                    />
                    <div className="col-sm-6">
                      <p className="font-weight-bold">MobileNo</p>
                      <h6 className="text-muted">9840612865</h6>
                    </div>
                    <hr
                      style={{
                        color: "black",
                        backgroundColor: "black",
                        height: 2,
                        width: 593,
                      }}
                    />
                    <div className="col-sm-6">
                      <p className="font-weight-bold">Description</p>
                      <h6 className="text-muted">
                        I will do my work properly and sincerly
                      </h6>
                    </div>
                    <hr
                      style={{
                        color: "black",
                        backgroundColor: "black",
                        height: 2.5,
                        width: 593,
                      }}
                    />
                    <button
                      className="button"
                      component={Link}
                      size="lg"
                      style={{
                        color: "white",
                        backgroundColor: "blue",
                        position: "relative",
                        margin: "0",
                        position: "absolute",
                        top: "86%",
                        transform: "translateY(-50%)",
                        transform: "translateY(-50%)",
                      }}
                    >
                      Book Know
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 mt-5 pt-5">
              <div className="row z-depth-3">
                <div className="col-sm-4 bg-info rounded-left">
                  <div className="card-block text-center text-white">
                    <i className="fas fa-user-tie fa-7x mt-5"> </i>
                    <h2 className="font-weight-bold mt-4">Balaji</h2>
                    <p>Electrician</p>
                    <i className="far fa-edit fa-2x mb-4"></i>
                  </div>
                </div>
                <div className="col-sm-8 bg-white rounded-right">
                  <h3 className="mt-3 text-center">Information</h3>
                  <div className="row">
                    <hr
                      style={{
                        color: "black",
                        backgroundColor: "black",
                        height: 2.5,
                        width: 593,
                      }}
                    />
                    <div className="col-sm-6">
                      <p className="font-weight-bold">MobileNo</p>
                      <h6 className="text-muted">8778254225</h6>
                    </div>
                    <hr
                      style={{
                        color: "black",
                        backgroundColor: "black",
                        height: 2,
                        width: 593,
                      }}
                    />
                    <div className="col-sm-6">
                      <p className="font-weight-bold">Description</p>
                      <h6 className="text-muted">
                        I will do my work properly and sincerly
                      </h6>
                    </div>
                    <hr
                      style={{
                        color: "black",
                        backgroundColor: "black",
                        height: 2.5,
                        width: 593,
                      }}
                    />
                    <button
                      className="button"
                      component={Link}
                      size="lg"
                      style={{
                        color: "white",
                        backgroundColor: "blue",
                        position: "relative",
                        margin: "0",
                        position: "absolute",
                        top: "86%",
                        transform: "translateY(-50%)",
                        transform: "translateY(-50%)",
                      }}
                    >
                      Book Know
                    </button>
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default profile;
