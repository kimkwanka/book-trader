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

export function requestBooks(bookName) {
  return {
    type: 'REQUEST_BOOKS',
    bookName,
  };
}

export function receiveBooks(json) {
  return {
    type: 'RECEIVE_BOOKS',
    json,
  };
}

export function fetchBooks(bookName) {
  return (dispatch) => {
    dispatch(requestBooks(bookName));
    return axios.get(`/api/books/${bookName}`)
    .then((res) => {
      const foundBooks = res.data.items.map(item => item.volumeInfo);
      console.log(foundBooks);
      dispatch(receiveBooks(foundBooks));
    })
    .catch((err) => {
      console.log(err);
    });
  };
}

