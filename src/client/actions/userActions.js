export function setUserProfile(profile) {
  return {
    type: 'SET_USER_PROFILE',
    fullName: profile.fullName,
    city: profile.city,
    state: profile.state,
  };
}
