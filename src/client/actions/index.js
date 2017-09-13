import { bindActionCreators } from 'redux';

import * as userActions from './userActions';
import * as booksActions from './booksActions';
import * as bookSearchActions from './bookSearchActions';

import store from '../../shared/store';

const allActions = {
  ...userActions,
  ...booksActions,
  ...bookSearchActions,
};

//  'Prebind' the Redux store's dispatch() to all action creators for easier usage.
//  Components don't need connect() to be able to dispatch actions this way.
export default bindActionCreators(allActions, store.dispatch);
