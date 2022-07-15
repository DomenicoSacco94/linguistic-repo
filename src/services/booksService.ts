import axios from 'axios';
import { Book } from '../models/Book';

export const getAllBooks = async (): Promise<Book[]> => {
  return await axios
    .get('https://stark-crag-00671.herokuapp.com/books')
    .then((resp) => {
      return resp.data as Book[];
    });
};

export const getBookById = async (id: string): Promise<Book> => {
  return await axios
    .get(`https://stark-crag-00671.herokuapp.com/books/${id}`)
    .then((resp) => {
      return resp.data as Book;
    });
};
