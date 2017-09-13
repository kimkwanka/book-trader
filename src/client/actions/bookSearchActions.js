import axios from 'axios';

function searchBooksRequest(bookName) {
  return {
    type: 'SEARCH_BOOKS_REQUEST',
    bookName,
  };
}

function searchBooksSuccess(response) {
  return {
    type: 'SEARCH_BOOKS_SUCCESS',
    response,
  };
}

function searchBooksFailure(error) {
  return {
    type: 'SEARCH_BOOKS_FAILURE',
    error,
  };
}

export function setBooksSearchTerm(searchTerm) {
  return {
    type: 'SET_BOOKS_SEARCH_TERM',
    searchTerm,
  };
}

export function searchBooks(bookName) {
  return (dispatch) => {
    dispatch(searchBooksRequest(bookName));
    return axios.get(`/api/booksearch/${bookName}`)
    .then((res) => {
      // console.log('GOT IT', res.data.items)
      const foundBooks = res.data.items.map(item => item.volumeInfo);
      // console.log('Still dandy',foundBooks)
      dispatch(searchBooksSuccess(foundBooks));
    })
    .catch((err) => {
      dispatch(searchBooksFailure(err));
    });
  };
}

