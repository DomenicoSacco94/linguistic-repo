import { RcFile } from 'antd/lib/upload';
import { SAVED_TEXT_KEY } from './constants';
import { Book } from '../models/Book';
import { Buffer } from 'buffer';
import { NavigateFunction } from 'react-router-dom';

export const doBeforeUpload =
  (navigate: NavigateFunction) => (file: RcFile) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      if (e.target?.result) {
        localStorage.setItem(SAVED_TEXT_KEY, e.target?.result.toString());
        navigate('/linguistic-repo/read');
      }
    };
    reader.readAsText(file);
    // Prevent upload
    return false;
  };

export const getBookAsText = (book: Book): string | undefined => {
  if (book.content) {
    return book.content;
  } else if (book.rawContent) {
    return new Buffer(book.rawContent, 'base64').toString('utf-8');
  } else {
    return undefined;
  }
};
