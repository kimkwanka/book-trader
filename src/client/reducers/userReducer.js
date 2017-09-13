const user = (state = {
  name: '',
  authenticated: false,
  fullName: '',
  city: '',
  state: '',
}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default user;
