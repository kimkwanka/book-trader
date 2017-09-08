import axios from 'axios';
import dotenv from 'dotenv';

dotenv.load();

const apiKey = process.env.BOOKS_API_KEY;

const getBook = bookName => new Promise((resolve, reject) => {
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=${apiKey}`)
  .then((res) => {
    resolve(res.data);
  })
  .catch((err) => {
    reject(err);
  });
});

export default getBook;
