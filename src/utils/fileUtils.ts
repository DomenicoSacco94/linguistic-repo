import { RcFile } from 'antd/lib/upload';
import { READ_TRANSLATE_PATH, SAVED_TEXT_KEY } from './constants';
import { Book } from '../models/Book';
import { Buffer } from 'buffer';
import { NavigateFunction } from 'react-router-dom';

export const doBeforeUpload =
  (navigate: NavigateFunction) => (file: RcFile) => {
    const reader = new FileReader();

    console.log(file.type);
    if (file.type == 'text/plain') {
      reader.onload = (e) => {
        if (e.target?.result) {
          localStorage.setItem(SAVED_TEXT_KEY, e.target?.result.toString());
          navigate(`${READ_TRANSLATE_PATH}`);
        }
      };
      reader.readAsText(file);
    }
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

export const memorySizeOf = (obj: any) => {
  let bytes = 0;

  function sizeOf(obj: any) {
    if (obj !== null && obj !== undefined) {
      switch (typeof obj) {
        case 'number':
          bytes += 8;
          break;
        case 'string':
          bytes += obj.length * 2;
          break;
        case 'boolean':
          bytes += 4;
          break;
        case 'object':
          // eslint-disable-next-line no-case-declarations
          let objClass = Object.prototype.toString.call(obj).slice(8, -1);
          if (objClass === 'Object' || objClass === 'Array') {
            for (let key in obj) {
              // eslint-disable-next-line no-prototype-builtins
              if (!obj.hasOwnProperty(key)) continue;
              sizeOf(obj[key]);
            }
          } else bytes += obj.toString().length * 2;
          break;
      }
    }
    return bytes;
  }

  const formatByteSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' bytes';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(3) + ' KiB';
    else if (bytes < 1073741824) return (bytes / 1048576).toFixed(3) + ' MiB';
    else return (bytes / 1073741824).toFixed(3) + ' GiB';
  };

  return formatByteSize(sizeOf(obj));
};
