import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BookCard from './BookCard';

const UserCollection = ({ user, allBooks }) => (
  <div>
    <h1>{user.name}&#39;s collection:</h1>
    <div className="flex flex-wrap justify-center">
      {allBooks.collection.filter(book => (book.owner === user.name)).map(
        book => <BookCard key={book.key + book.owner + book.requester} book={book} />,
      )}
    </div>
  </div>
);

UserCollection.propTypes = {
  user: PropTypes.objectOf(PropTypes.shape).isRequired,
  allBooks: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default connect(store => ({
  allBooks: store.allBooks,
  user: store.user,
}))(UserCollection);
