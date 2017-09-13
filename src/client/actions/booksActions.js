export function addBook(book, owner) {
  return {
    type: 'ADD_BOOK',
    book,
    owner,
  };
}

export function tradeBook(book, oldOwner, newOwner) {
  return {
    type: 'ADD_BOOK',
    book,
    oldOwner,
    newOwner,
  };
}
