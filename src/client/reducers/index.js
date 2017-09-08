import { combineReducers } from 'redux';
import user from './userReducer';
import uiState from './uiStateReducer';

export default combineReducers({ user, uiState });
