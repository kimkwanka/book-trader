import React from 'react';
import Helmet from 'react-helmet';

import UserCollection from './UserCollection';
import BookSearch from './BookSearch';
import Profile from './Profile';

const Dashboard = () => (
  <div className="container margin-vertical-small">
    <Helmet title="Dashboard" />
    <h1 className>Dashboard</h1>
    <UserCollection />
    <BookSearch />
    <Profile />
  </div>
);

export default Dashboard;
