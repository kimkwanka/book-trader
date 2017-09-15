import { createStore } from 'redux';

import reducer from '../client/reducers/allBooksReducer';

const serverStore = createStore(reducer);

export default serverStore;
