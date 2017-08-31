import React from 'react';

const year = new Date().getFullYear();

const Footer = () => (
  <footer>
    <div className="container flex-column items-center">
      <h5 className="margin-top-small">
        <a
          href="https://github.com/kimkwanka/book-trader"
          target="_blank" rel="noopener noreferrer"
        >
        bookTrader
        </a> by Kim Kwanka &copy; {year}
      </h5>
    </div>
  </footer>
);

export default Footer;
