import { combineReducers } from 'redux';
import user from './userReducer';
import uiState from './uiStateReducer';
import userBooks from './userBooksReducer';
import bookSearch from './bookSearchReducer';

export default combineReducers({ user, userBooks, uiState, bookSearch });
