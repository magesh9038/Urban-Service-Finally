import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import details from "./details";
import { getallservices } from "../../actions/profile";

const Profile = ({ getallservices, Profile: { profile, loading }, match }) => {
  useEffect(() => {
    getallservices(match.params.id);
  }, [getallservices, match.params.id]);
  return (
    <Fragment>
      <Link to="/details" className="btn">
        Back to post
      </Link>
      <div className="services">
        {profile.map((Detail) => (
          <getallservices key={Detail._id} Detail={Detail} />
        ))}
      </div>
    </Fragment>
  );
};

Profile.propTypes = {
  getallservices: PropTypes.func.isRequired,
  Profile: PropTypes.object.isRequired,
};
let mapStateToProps = (state) => ({
  Profile: state.post,
});
export default connect(mapStateToProps, { getallservices })(Profile);
