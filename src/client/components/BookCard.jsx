import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../actions';

const { addBook, requestTrade, approveTrade, cancelTrade } = actions;

const BookCard = ({ book, user, type }) => {
  let footerContent = null;

  switch (type) {
    case 'addBook': {
      footerContent = (
        <button
          onClick={() => addBook(book, user.name)}
        >
        Add Book
        </button>);
      break;
    }
    case 'requestTrade': {
      if (user.name !== book.owner) {
        if (book.requester === '') {
          footerContent = (
            <button
              onClick={() => requestTrade(book, user.name)}
            >
            Request Trade
            </button>);
        } else {
          footerContent = <h4 className="center">Trade pending</h4>;
        }
      }
      break;
    }
    case 'pendingTrade': {
      if (user.name === book.owner) {
        footerContent = (
          <div className="flex-column">
            <h4 className="center"><span className="c-primary bold">{book.requester}</span>&#39;s trade request</h4>
            <button
              className="bg-success border-success margin-bottom-tiny"
              onClick={() => approveTrade(book)}
            >
            Approve Trade
            </button>
            <button
              className="bg-danger border-danger"
              onClick={() => cancelTrade(book)}
            >
            Cancel Trade
            </button>
          </div>);
      } else if (user.name === book.requester) {
        footerContent = (
          <div className="flex-column">
            <h4 className="center">Waiting for approval from <span className="c-primary bold">{book.owner}</span></h4>
            <button
              className="bg-danger border-danger"
              onClick={() => cancelTrade(book)}
            >
            Cancel Trade Request
            </button>
          </div>);
      }
      break;
    }
    default:
      break;
  }
  return (
    <div className="book-card flex-column border-round bg-white margin-right margin-bottom">
      <div
        className="book-card__thumbnail border-round-top"
        style={{
          background: `url(${book.thumbnail})`,
          backgroundSize: 'cover',
        }}
      />
      <div className="book-card__content padding flex-1">
        <p className="italic">{book.authors}</p>
        <h3 className="flex-1">{book.title}</h3>
      </div>
      <div className="book-card__footer padding-horizontal padding-bottom flex-column">
        {footerContent}
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.objectOf(PropTypes.shape).isRequired,
  user: PropTypes.objectOf(PropTypes.shape).isRequired,
  type: PropTypes.string,
};

BookCard.defaultProps = {
  type: 'default',
};

export default connect(store => ({
  user: store.user,
}))(BookCard);
