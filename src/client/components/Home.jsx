import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Home = ({ user }) => (
  <div>
    <Helmet title="Home" />
    <div className="width-100 height-100-vh" style={{ background: 'url("/fistbump.jpg")', backgroundSize: 'cover' }}>
      <div className="flex-column items-center justify-center bg-black-50 width-100 height-100">
        <h1 className="c-text-inverse bold uppercase h0 wide">Dare to trade books.</h1>
        <p className="c-text-inverse bold margin width-75 h4">
          Booktrading. Everyone talks about it but only the truly professional are able to trade books day in and day out.
          Here at bookTrader we understand your commitment and want to give you what you need to take your book trading to the next level.
        </p>
        <button className="button--accent margin">Sign in with Github</button>
      </div>
    </div>
  </div>
);

Home.propTypes = {
  user: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default connect(store => ({
  user: store.user,
}))(Home);
