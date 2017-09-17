const user = (state = {
  name: '',
  authenticated: false,
  fullName: '',
  city: '',
  state: '',
}, action) => {
  switch (action.type) {
    case 'SET_USER_PROFILE': {
      return {
        ...state,
        fullName: action.fullName,
        city: action.city,
        state: action.state,
      };
    }
    case 'SET_USER_NAME': {
      return {
        ...state,
        name: action.userName,
      };
    }
    default:
      return state;
  }
};

export default user;
