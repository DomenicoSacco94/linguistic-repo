import React from 'react';
import { SAVED_TEXT_KEY, SAVED_TRANSLATIONS_KEY } from '../utils/constants';
import { Button } from 'antd';

export const ClearCacheButton = () => {
  return (
    <Button
      onClick={() => {
        localStorage.removeItem(SAVED_TRANSLATIONS_KEY);
        localStorage.removeItem(SAVED_TEXT_KEY);
      }}
    >
      Clear Cache
    </Button>
  );
};
