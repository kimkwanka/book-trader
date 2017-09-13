const userBooks = (state = {
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
    default:
      return state;
  }
};

export default userBooks;
