import React from 'react';
import { SAVED_TEXT_KEY, SAVED_TRANSLATIONS_KEY } from '../utils/constants';
import { Button } from 'antd';
import { getMapFromCache } from '../utils/translation';
import { memorySizeOf } from '../utils/fileUtils';

export const ClearCacheButton: React.FC = () => {
  const map = getMapFromCache();

  return (
    <>
      <div className="inputTextAreaContainer">
        Cached entries: {map?.size}
        <br />
        {map?.size > 0 && `Cache size: ${memorySizeOf(map)}`}
      </div>
      <Button
        className="inputTextAreaButton"
        onClick={() => {
          localStorage.removeItem(SAVED_TRANSLATIONS_KEY);
        }}
      >
        Clear cached translations
      </Button>
      <Button
        className="inputTextAreaButton"
        onClick={() => {
          localStorage.removeItem(SAVED_TEXT_KEY);
        }}
      >
        Clear saved text
      </Button>
    </>
  );
};
