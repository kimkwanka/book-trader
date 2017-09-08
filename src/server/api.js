import getBooks from './googleBooksApi';

const api = (app) => {
  app.get('/api', (req, res) => {
    getBooks('Prey')
    .then((apiRes) => {
      res.json(apiRes);
    })
    .catch((err) => {
      console.log(err);
    });
  });
};

export default api;
