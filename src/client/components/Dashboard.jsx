import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import BookSearch from './BookSearch';
import Profile from './Profile';

const Dashboard = ({ }) => (
  <div className="container margin-vertical-small">
    <Helmet title="Dashboard" />
    <h1 className>Dashboard</h1>
    <BookSearch />
    <Profile />
  </div>
);

export default Dashboard;
