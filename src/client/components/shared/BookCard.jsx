import React from 'react';
import { NavLink } from 'react-router-dom';

const BookCard = ({ book }) => (
  <div className="flex">
    <h4>{book.title}</h4>
  </div>
);

export default BookCard;
