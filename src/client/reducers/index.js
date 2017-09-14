import { combineReducers } from 'redux';
import user from './userReducer';
import allBooks from './allBooksReducer';
import bookSearch from './bookSearchReducer';

export default combineReducers({ user, allBooks, bookSearch });
