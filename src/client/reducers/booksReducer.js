const books = (state = {
  isFetching: false,
}, action) => {
  switch (action.type) {
    /* case 'ADD_BOOK': {
      const newState = { ...state };
      const newBooks = newState[action.owner] || [];
      newBooks.push(action.book);
      newState[action.owner] = newBooks;
      return newState;
    }*/
    case 'REQUEST_BOOKS': {
      return {
        ...state,
        isFetching: true,
      };
    }
    case 'RECEIVE_BOOKS': {
      return {
        ...state,
        isFetching: false,
      };
    }
    default:
      return state;
  }
};

export default books;
