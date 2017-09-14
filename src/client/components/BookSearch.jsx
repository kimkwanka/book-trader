import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BookCard from './BookCard';

import actions from '../actions';

const { setBooksSearchTerm, searchBooks } = actions;

const SearchResults = ({ bookSearch }) => {
  const searchResults = bookSearch.searchResults.map(
    book => <BookCard key={book.key} book={book} type="addBook" />,
  );
  return (
    <div className="margin-top">
      {searchResults.length > 0 && bookSearch.hasSearched ?
        <h4 className="center">Search results for &quot;{bookSearch.searchTerm}&quot;</h4> : null}
      {searchResults.length <= 0 && bookSearch.hasSearched ?
        <h4 className="center">No results for &quot;{bookSearch.searchTerm}&quot;</h4> : null}
      <div className="flex flex-wrap justify-center">
        { bookSearch.isFetching ? <h3>Searching...</h3> : searchResults }
      </div>
    </div>
  );
};

const BookSearch = ({ bookSearch }) => (
  <div className="margin-vertical-small">
    <h2 className>Book Search</h2>
    <h3>Search our book database to add books to your collection: </h3>
    <div className="flex">
      <input
        type="text"
        placeholder="Enter book title"
        defaultValue={bookSearch.searchTerm}
        onChange={e => setBooksSearchTerm(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            searchBooks(bookSearch.searchTerm);
          }
        }}
      />
      <button className="margin-left-tiny" onClick={() => searchBooks(bookSearch.searchTerm)}>Search</button>
    </div>
    <SearchResults bookSearch={bookSearch} />
  </div>
);

SearchResults.propTypes = {
  bookSearch: PropTypes.objectOf(PropTypes.shape).isRequired,
};

BookSearch.propTypes = {
  bookSearch: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default connect(store => ({
  bookSearch: store.bookSearch,
  user: store.user,
}))(BookSearch);
