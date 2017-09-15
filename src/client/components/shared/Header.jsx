import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = ({ user }) => (
  <header>
    <div className="container flex">
      <NavLink className="logo-text" to="/" exact activeClassName="navItemActive">bookTrader</NavLink>
      <nav>
        <ul>
          <li><NavLink to="/dashboard" activeClassName="navItemActive">Dashboard</NavLink></li>
          <li><NavLink to="/booktrading" activeClassName="navItemActive">Trading</NavLink></li>
          {user.authenticated ?
            <li><a className="button button--primary-clear" href="/logout">Sign Out</a></li> :
            <li><a className="button button--primary-clear" href="/login">Sign In</a></li>}
        </ul>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default connect(store => ({
  user: store.user,
}))(Header);

