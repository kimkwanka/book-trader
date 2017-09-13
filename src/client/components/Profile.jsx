import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Profile = ({ user }) => (
  <div className="margin-top">
    <h2>Profile</h2>
    <label className="margin-top-small" htmlFor="fullName">Full Name</label>
    <input
      type="text"
      id="fullName"
      placeholder="Enter your full name"
      defaultValue={user.fullName}
      onChange={null}
      onKeyPress={null}
    />
    <label className="margin-top-small" htmlFor="city">City</label>
    <input
      type="text"
      id="city"
      placeholder="Enter your city"
      defaultValue={user.city}
      onChange={null}
      onKeyPress={null}
    />
    <label className="margin-top-small" htmlFor="state">State</label>
    <input
      type="text"
      id="state"
      placeholder="Enter your state"
      defaultValue={user.state}
      onChange={null}
      onKeyPress={null}
    />
    <div className="flex justify-center">
      <button className="margin-top" onClick={null}>Save Changes</button>
    </div>
  </div>
);

Profile.propTypes = {
  user: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default connect(store => ({
  user: store.user,
}))(Profile);
