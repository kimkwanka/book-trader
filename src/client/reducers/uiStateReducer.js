const uiState = (state = {
  searchResults: [],
}, action) => {
  switch (action.type) {
    case 'SET_SEARCH_RESULTS': {
      const newState = { ...state };
      newState.searchResults = action.results;
      return newState;
    }
    default:
      return state;
  }
};

export default uiState;
