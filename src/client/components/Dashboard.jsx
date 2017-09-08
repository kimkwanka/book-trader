import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import axios from 'axios';
import StateProvider from './shared/StateProvider';

import actions from '../actions';

const { setSearchResults } = actions;

const handleAddBookClick = searchTerm => () => {
  axios.get(`/api/books/${searchTerm}`)
  .then((res) => {
    const foundBooks = res.data.items.map(item => item.volumeInfo);
    console.log(res.data.items);
    setSearchResults(foundBooks);
  })
  .catch((err) => {
    console.log(err);
  });
};

const handleKeyPress = (e, searchTerm) => {
  if (e.key === 'Enter') {
    handleAddBookClick(searchTerm)();
  }
};

const handleSearchTermChange = (e, state, setState) => {
  setState({
    searchTerm: e.target.value,
  });
};

const MyBooks = ({ user }) => {
  const books = user.books.map(book => <h3>{book.title}</h3>);
  const hasBooks = books.length > 0;

  return (
    <div className="">
      <h2>My Books</h2>
      {hasBooks ? books :
      <h3>Your collection is empty.</h3>}
    </div>
  );
};

const SearchResults = ({ results }) => {
  const searchResults = results.map(book => <h4 key={book.id}>{book.title}</h4>);
  return (
    <div className="">
      {searchResults}
    </div>
  );
};

const Dashboard = ({ user, uiState, state, setState }) => (
  <div className="container margin-top-small">
    <Helmet title="Dashboard" />
    <h1>Dashboard</h1>
    <MyBooks user={user} />
    <SearchResults results={uiState.searchResults} />
    <div className="flex">
      <input
        type="text"
        placeholder="Enter book title"
        defaultValue={state.searchTerm}
        onChange={e => handleSearchTermChange(e, state, setState)}
        onKeyPress={e => handleKeyPress(e, state.searchTerm)}
      />
      <button onClick={handleAddBookClick(state.searchTerm)}>Add Book</button>
    </div>
  </div>
);

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

MyBooks.propTypes = {
  user: PropTypes.objectOf(PropTypes.shape).isRequired,
};

Dashboard.propTypes = {
  user: PropTypes.objectOf(PropTypes.shape).isRequired,
  uiState: PropTypes.objectOf(PropTypes.shape).isRequired,
  state: PropTypes.objectOf(PropTypes.shape).isRequired,
  setState: PropTypes.func.isRequired,
};

export default connect(store => ({
  user: store.user,
  uiState: store.uiState,
}))(StateProvider(Dashboard, {
  searchTerm: '',
}, {}));
