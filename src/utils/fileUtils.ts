import { RcFile } from 'antd/lib/upload';
import { STORAGE_ITEM_KEY } from './constants';

export const beforeUpload = (file: RcFile) => {
  const reader = new FileReader();

  reader.onload = (e) => {
    e.target?.result && localStorage.setItem(STORAGE_ITEM_KEY, e.target?.result.toString());
  };
  reader.readAsText(file);
  // Prevent upload
  return false;
};
