import getBooks from './googleBooksApi';

const api = (app) => {
  app.get('/api/books/:bookName', (req, res) => {
    getBooks(req.params.bookName)
    .then((apiRes) => {
      res.json(apiRes);
    })
    .catch((err) => {
      console.log(err);
    });
  });
};

export default api;
