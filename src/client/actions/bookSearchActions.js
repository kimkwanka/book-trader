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
      const foundBooks = res.data.items.map(item => ({
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors,
        thumbnail: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : '',
        key: item.volumeInfo.industryIdentifiers[0].identifier,
      }));
      dispatch(searchBooksSuccess(foundBooks));
    })
    .catch((err) => {
      dispatch(searchBooksFailure(err));
    });
  };
}

