import axios from 'axios';

export function addBook(book, owner) {
  return {
    type: 'ADD_BOOK',
    book,
    owner,
  };
}

export function tradeBook(book, oldOwner, newOwner) {
  return {
    type: 'ADD_BOOK',
    book,
    oldOwner,
    newOwner,
  };
}

export function searchBooksRequest(bookName) {
  return {
    type: 'SEARCH_BOOKS_REQUEST',
    bookName,
  };
}

export function searchBooksSuccess(response) {
  return {
    type: 'SEARCH_BOOKS_SUCCESS',
    response,
  };
}

export function searchBooksFailure(error) {
  return {
    type: 'SEARCH_BOOKS_FAILURE',
    error,
  };
}

export function searchBooks(bookName) {
  return (dispatch) => {
    dispatch(searchBooksRequest(bookName));
    return axios.get(`/api/booksearch/${bookName}`)
    .then((res) => {
      const foundBooks = res.data.items.map(item => item.volumeInfo);
      dispatch(searchBooksSuccess(foundBooks));
    })
    .catch((err) => {
      dispatch(searchBooksFailure(err));
    });
  };
}

