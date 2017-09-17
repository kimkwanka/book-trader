import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import BookCard from './BookCard';
import StateProvider from './shared/StateProvider';

import actions from '../actions';

const { syncDataIfNeeded } = actions;

const componentDidMount = () => {
  syncDataIfNeeded();
};

const BookTrading = ({ user, allBooks }) => {
  const pendingTradeCards = allBooks.collection.filter(
    book => (book.owner === user.name && book.requester !== '') || book.requester === user.name,
  ).map(
    book => <BookCard key={book.key + book.owner + book.requester} book={book} type="pendingTrade" />,
  );

  const allBookCards = allBooks.collection.map(
    book => <BookCard key={book.key + book.owner + book.requester} book={book} type="requestTrade" />,
  );

  return (
    <div className="container margin-top-small">
      <Helmet title="Book Trading" />
      <h1>Book Trading</h1>
      <h2>{user.name}</h2>
      <h2>Your outstanding trades:</h2>
      <div className="flex flex-wrap justify-center">
        {pendingTradeCards}
      </div>
      <h2>All Books:</h2>
      <div className="flex flex-wrap justify-center">
        {allBookCards}
      </div>
    </div>
  );
};

BookTrading.propTypes = {
  user: PropTypes.objectOf(PropTypes.shape).isRequired,
  allBooks: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default connect(store => ({
  user: store.user,
  allBooks: store.allBooks,
}))(StateProvider(BookTrading, {}, {
  componentDidMount,
}));
