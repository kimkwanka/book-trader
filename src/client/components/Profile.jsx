import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StateProvider from './shared/StateProvider';

import actions from '../actions';

const { setUserProfile } = actions;

const Profile = ({ user, state, setState }) => (
  <div className="margin-top">
    <h2>Profile</h2>
    <form
      onChange={(e) => {
        const newState = { ...state };
        newState.inputVals[e.target.id] = e.target.value;
        setState(newState);
      }}
    >
      <label className="margin-top-small" htmlFor="fullName">Full Name</label>
      <input
        type="text"
        id="fullName"
        placeholder="Enter your full name"
        defaultValue={user.fullName}
      />
      <label className="margin-top-small" htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        placeholder="Enter your city"
        defaultValue={user.city}
      />
      <label className="margin-top-small" htmlFor="state">State</label>
      <input
        type="text"
        id="state"
        placeholder="Enter your state"
        defaultValue={user.state}
      />
      <div className="flex justify-center">
        <button type="button" className="margin-top" onClick={() => setUserProfile(state.inputVals)}>Save Changes</button>
      </div>
    </form>
  </div>
);

Profile.propTypes = {
  user: PropTypes.objectOf(PropTypes.shape).isRequired,
  state: PropTypes.objectOf(PropTypes.shape).isRequired,
  setState: PropTypes.func.isRequired,
};

export default connect(store => ({
  user: store.user,
}))(StateProvider(Profile, {
  inputVals: {},
}, {}));
