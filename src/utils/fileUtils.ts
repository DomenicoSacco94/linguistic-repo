import { RcFile } from 'antd/lib/upload';
import { STORAGE_ITEM_KEY } from './constants';
import { Book } from '../models/Book';
import { Buffer } from 'buffer';

export const beforeUpload = (file: RcFile) => {
  const reader = new FileReader();

  reader.onload = (e) => {
    e.target?.result &&
      localStorage.setItem(STORAGE_ITEM_KEY, e.target?.result.toString());
  };
  reader.readAsText(file);
  // Prevent upload
  return false;
};

export const getBookAsText = (book: Book): string | undefined => {
  if (book.content) {
    return book.content;
  } else if (book.rawContent) {
    return new Buffer(book.rawContent, 'base64').toString(
      'utf-8'
    );
  } else {
    return undefined;
  }
};
