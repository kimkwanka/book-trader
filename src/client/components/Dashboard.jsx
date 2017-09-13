import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import BookSearch from './BookSearch';

const Dashboard = ({ }) => (
  <div className="container margin-vertical-small">
    <Helmet title="Dashboard" />
    <h1 className>Dashboard</h1>
    <BookSearch />
  </div>
);

export default Dashboard;
