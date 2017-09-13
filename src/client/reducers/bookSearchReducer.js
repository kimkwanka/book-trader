const bookSearch = (state = {
  isFetching: false,
}, action) => {
  switch (action.type) {
    case 'SEARCH_BOOKS_REQUEST': {
      return {
        ...state,
        isFetching: true,
      };
    }
    case 'SEARCH_BOOKS_SUCCESS': {
      return {
        ...state,
        isFetching: false,
      };
    }
    case 'SEARCH_BOOKS_FAILURE': {
      return {
        ...state,
        isFetching: false,
      };
    }
    default:
      return state;
  }
};

export default bookSearch;
