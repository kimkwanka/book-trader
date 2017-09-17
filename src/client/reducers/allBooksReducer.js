import hash from '../../shared/hash';

const allBooks = (state = {
  isFetching: false,
  hash: -1,
  collection: [
    {
      title: 'Mega Man #46',
      authors: ['Ian Flynn'],
      thumbnail: 'http://books.google.com/books/content?id=UC3JBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      key: '9781627385886',
      owner: 'Owen',
      requester: 'Jill',
      id: 0,
    },
    {
      title: 'Megaman Zero Official Complete Works',
      authors: ['Ian Flynn'],
      thumbnail: 'http://books.google.com/books/content?id=pI_QAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      key: '"1897376014"',
      owner: 'Jill',
      requester: 'Owen',
      id: 1,
    },
  ],
}, action) => {
  switch (action.type) {
    case 'SYNC_COLLECTION': {
      const newCollection = action.collection;
      const newHash = hash(newCollection);
      return {
        ...state,
        hash: newHash,
        collection: newCollection,
      };
    }
    case 'ADD_BOOK': {
      const newCollection = state.collection.concat({
        ...action.book,
        owner: action.owner,
        requester: '',
        id: state.collection.length,
      });

      const newHash = hash(newCollection);

      return {
        ...state,
        hash: newHash,
        collection: newCollection,
      };
    }
    case 'REQUEST_TRADE': {
      const newCollection = state.collection.slice(0);
      newCollection[action.book.id].requester = action.requester;

      const newHash = hash(newCollection);

      return {
        ...state,
        hash: newHash,
        collection: newCollection,
      };
    }
    case 'APPROVE_TRADE': {
      const newCollection = state.collection.slice(0);
      newCollection[action.book.id].owner = action.book.requester;
      newCollection[action.book.id].requester = '';

      const newHash = hash(newCollection);

      return {
        ...state,
        hash: newHash,
        collection: newCollection,
      };
    }
    case 'CANCEL_TRADE': {
      const newCollection = state.collection.slice(0);
      newCollection[action.book.id].requester = '';

      const newHash = hash(newCollection);

      return {
        ...state,
        hash: newHash,
        collection: newCollection,
      };
    }
    default:
      return state;
  }
};

export default allBooks;
