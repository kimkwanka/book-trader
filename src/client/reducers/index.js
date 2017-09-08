import { combineReducers } from 'redux';
import user from './userReducer';
import uiState from './uiStateReducer';
import books from './booksReducer';

export default combineReducers({ user, books, uiState });
