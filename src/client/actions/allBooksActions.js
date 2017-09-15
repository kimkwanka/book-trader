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

function saveAction(action) {
  return (dispatch) => {
    dispatch(saveActionRequest(action));
    return axios.post('/db/update/', action)
    .then((res) => {
      console.log(res);
      dispatch(action);
    })
    .catch((err) => {
      dispatch(saveActionFailure(action, err));
    });
  };
}


export function addBook(book, owner) {
  return saveAction({
    type: 'ADD_BOOK',
    book,
    owner,
  });
}

export function requestTrade(book, requester) {
  return saveAction({
    type: 'REQUEST_TRADE',
    book,
    requester,
  });
}

export function approveTrade(book) {
  return saveAction({
    type: 'APPROVE_TRADE',
    book,
  });
}

export function cancelTrade(book) {
  return saveAction({
    type: 'CANCEL_TRADE',
    book,
  });
}

