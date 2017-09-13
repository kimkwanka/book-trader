import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../actions';

const { setBooksSearchTerm, searchBooks } = actions;

const BookCard = ({ book }) => (
  <div className="book-card flex-column border-round bg-white margin-right margin-bottom">
    <div
      className="book-card__thumbnail border-round-top"
      style={{
        background: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})`,
        backgroundSize: 'cover',
      }}
    />
    <div className="book-card__content padding flex-1">
      <p className="italic">{book.authors}</p>
      <h3 className="flex-1">{book.title}</h3>
    </div>
    <div className="book-card__footer padding-horizontal padding-bottom flex-column">
      <button className="center" onClick={null}>Offer for trade</button>
    </div>
  </div>
);

const SearchResults = ({ bookSearch }) => {
  const searchResults = bookSearch.searchResults.map(
    book => <BookCard key={book.industryIdentifiers[0].identifier} book={book} />,
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
  <div className="container margin-vertical-small">
    <h1 className>Book Search</h1>
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

BookCard.propTypes = {
  book: PropTypes.objectOf(PropTypes.shape).isRequired,
};

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
