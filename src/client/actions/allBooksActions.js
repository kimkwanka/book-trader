import axios from 'axios';

function saveActionRequest(action) {
  return {
    type: 'SAVE_ACTION_REQUEST',
    action,
  };
}

function saveActionFailure(action, error) {
  return {
    type: 'SAVE_ACTION_FAILURE',
    action,
    error,
  };
}

function syncCollection(collection) {
  return {
    type: 'SYNC_COLLECTION',
    collection,
  };
}

function saveActionAndSync(action) {
  return (dispatch, getState) => {
    dispatch(saveActionRequest(action));
    const { allBooks: { hash } } = getState();

    return axios.post('/db/update/', { action, hash })
    .then((res) => {
      if (res.data.collectionStatus === 'stale') {
        console.log('Out of date');
        dispatch(syncCollection(res.data.collection));
      }
      dispatch(action);
    })
    .catch((err) => {
      dispatch(saveActionFailure(action, err));
    });
  };
}

export function addBook(book, owner) {
  return saveActionAndSync({
    type: 'ADD_BOOK',
    book,
    owner,
  });
}

export function requestTrade(book, requester) {
  return saveActionAndSync({
    type: 'REQUEST_TRADE',
    book,
    requester,
  });
}

export function approveTrade(book) {
  return saveActionAndSync({
    type: 'APPROVE_TRADE',
    book,
  });
}

export function cancelTrade(book) {
  return saveActionAndSync({
    type: 'CANCEL_TRADE',
    book,
  });
}

