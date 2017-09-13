const bookSearch = (state = {
  isFetching: false,
  hasSearched: false,
  searchTerm: '',
  searchResults: [],
  error: '',
}, action) => {
  switch (action.type) {
    case 'SEARCH_BOOKS_REQUEST': {
      return {
        ...state,
        searchResults: [],
        isFetching: true,
        hasSearched: false,
        error: '',
      };
    }
    case 'SEARCH_BOOKS_SUCCESS': {
      return {
        ...state,
        isFetching: false,
        hasSearched: true,
        searchResults: action.response,
      };
    }
    case 'SEARCH_BOOKS_FAILURE': {
      return {
        ...state,
        isFetching: false,
        hasSearched: true,
        error: 'No results.',
      };
    }
    case 'SET_BOOKS_SEARCH_TERM': {
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    }
    default:
      return state;
  }
};

export default bookSearch;
