import { combineReducers } from 'redux';
import user from './userReducer';
import userBooks from './userBooksReducer';
import bookSearch from './bookSearchReducer';

export default combineReducers({ user, userBooks, bookSearch });
