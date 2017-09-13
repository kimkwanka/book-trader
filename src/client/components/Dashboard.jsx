import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import StateProvider from './shared/StateProvider';

import actions from '../actions';

const { setSearchResults, addBook, searchBooks } = actions;

const handleSearchBookClick = searchTerm => () => {
  searchBooks(searchTerm);
};

const handleKeyPress = (e, searchTerm) => {
  if (e.key === 'Enter') {
    handleSearchBookClick(searchTerm)();
  }
};

const handleSearchTermChange = (e, state, setState) => {
  setState({
    searchTerm: e.target.value,
  });
};

const MyBooks = ({ books }) => {
  let myBooks = null;

  if (books) {
    myBooks = books.map(book => <BookCard book={book} />);
  }

  return (
    <div className="">
      <h2>My Books</h2>
      {myBooks ?
        <div className="flex flex-wrap justify-center">
          {myBooks}
        </div> : <h3 className="center">Your collection is empty. </h3>}
    </div>
  );
};

const BookCard = ({ book, user, isSearchResult }) => (
  <div className="book-card flex-column border-round bg-white margin-right margin-bottom">
    <div
      className="book-card__thumbnail border-round-top"
      style={{
        background: `url(${book.imageLinks.thumbnail})`,
        backgroundSize: 'cover',
      }}
    />
    <div className="book-card__content padding flex-1">
      <p className="italic">{book.authors}</p>
      <h3 className="flex-1">{book.title}</h3>
    </div>
    <div className="book-card__footer padding-horizontal padding-bottom flex-column">
      {isSearchResult ? <button className="center" onClick={() => addBook(book, user.name)}>Add to My Books</button> :
      <button className="center" onClick={null}>Offer for trade</button>}
    </div>
  </div>
);

const SearchResults = ({ results, searchTerm, user }) => {
  const searchResults = results.map(book => <BookCard key={book.industryIdentifiers[0].identifier} book={book} user={user} isSearchResult />);
  return (
    <div className="margin-top">
      <h3>Search our book database to add books to your collection: </h3>
      {results.length > 0 ? <h4 className="center">Search results for &quot;{searchTerm}&quot;</h4> : null}
      <div className="flex flex-wrap justify-center">
        {searchResults}
      </div>
    </div>
  );
};

const Profile = ({ user }) => {
  return (
    <div className="margin-top">
      <h2>Profile</h2>
      <label className="margin-top-small" htmlFor="fullName">Full Name</label>
      <input
        type="text"
        id="fullName"
        placeholder="Enter your full name"
        defaultValue={''}
        onChange={null}
        onKeyPress={null}
      />
      <label className="margin-top-small" htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        placeholder="Enter your city"
        defaultValue={''}
        onChange={null}
        onKeyPress={null}
      />
      <label className="margin-top-small" htmlFor="state">State</label>
      <input
        type="text"
        id="state"
        placeholder="Enter your state"
        defaultValue={''}
        onChange={null}
        onKeyPress={null}
      />
      <div className="flex justify-center">
        <button className="margin-top" onClick={null}>Save Changes</button>
      </div>
    </div>
  );
};

const Dashboard = ({ user, uiState, state, setState, books, bookSearch }) => (
  <div className="container margin-vertical-small">
    <Helmet title="Dashboard" />
    <h1 className>Dashboard</h1>
    <MyBooks books={books[user.name]} />
    <SearchResults results={uiState.searchResults} searchTerm={state.searchTerm} user={user} />
    { books.isFetching ? <h3>Loading</h3> : null}
    <div className="flex">
      <input
        type="text"
        placeholder="Enter book title"
        defaultValue={state.searchTerm}
        onChange={e => handleSearchTermChange(e, state, setState)}
        onKeyPress={e => handleKeyPress(e, state.searchTerm)}
      />
      <button className="margin-left-tiny" onClick={handleSearchBookClick(state.searchTerm)}>Search</button>
    </div>
    <Profile user={user} />
  </div>
);

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchTerm: PropTypes.string.isRequired,
  user: PropTypes.objectOf(PropTypes.shape).isRequired,
};

MyBooks.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

MyBooks.defaultProps = {
  books: null,
};

BookCard.propTypes = {
  book: PropTypes.objectOf(PropTypes.shape).isRequired,
  user: PropTypes.objectOf(PropTypes.shape).isRequired,
};

Dashboard.propTypes = {
  user: PropTypes.objectOf(PropTypes.shape).isRequired,
  uiState: PropTypes.objectOf(PropTypes.shape).isRequired,
  state: PropTypes.objectOf(PropTypes.shape).isRequired,
  setState: PropTypes.func.isRequired,
  books: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default connect(store => ({
  user: store.user,
  uiState: store.uiState,
  books: store.books,
  bookSearch: store.bookSearch,
}))(StateProvider(Dashboard, {
  searchTerm: '',
}, {}));
