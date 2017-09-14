export function setUserProfile(profile) {
  return {
    type: 'SET_USER_PROFILE',
    fullName: profile.fullName,
    city: profile.city,
    state: profile.state,
  };
}

export function setUserName(userName) {
  return {
    type: 'SET_USER_NAME',
    userName,
  };
}
