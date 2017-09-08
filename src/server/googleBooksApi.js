import dotenv from 'dotenv';

dotenv.load();

const apiKey = process.env.BOOKS_API_KEY;

const getBook = bookName => new Promise((resolve, reject) => {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=${apiKey}`)
  .then((res) => {
    resolve(res.json());
  })
  .catch((err) => {
    reject(err);
  });
});

export default getBook;
