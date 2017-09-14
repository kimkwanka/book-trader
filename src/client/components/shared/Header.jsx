import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () =>
  (
    <header>
      <div className="container flex">
        <NavLink className="logo-text" to="/" exact activeClassName="navItemActive">bookTrader</NavLink>
        <nav>
          <ul>
            <li><NavLink to="/dashboard" activeClassName="navItemActive">Dashboard</NavLink></li>
            <li><NavLink to="/booktrading" activeClassName="navItemActive">Trading</NavLink></li>
            <li><a className="button button--primary-clear" to="/">Sign In</a></li>
            { /* <li><a className="button button--primary-clear" to="/">Sign Out</a></li> */ }
          </ul>
        </nav>
      </div>
    </header>
  );

export default Header;
