export function addBook(book, owner) {
  return {
    type: 'ADD_BOOK',
    book,
    owner,
  };
}

export function requestTrade(book, requester) {
  return {
    type: 'REQUEST_TRADE',
    book,
    requester,
  };
}


export function approveTrade(book) {
  return {
    type: 'APPROVE_TRADE',
    book,
  };
}

export function cancelTrade(book) {
  return {
    type: 'CANCEL_TRADE',
    book,
  };
}
