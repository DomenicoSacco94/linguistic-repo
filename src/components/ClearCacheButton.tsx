import React, { useEffect, useState } from 'react';
import { SAVED_TEXT_KEY, SAVED_TRANSLATIONS_KEY } from '../utils/constants';
import { Button } from 'antd';
import { getMapFromCache } from '../utils/translation';
import { memorySizeOf } from '../utils/fileUtils';

export const ClearCacheButton: React.FC = () => {
  const map = getMapFromCache();

  const [cachedMap, setCachedMap] = useState<Map<string, string>>(map);

  useEffect(() => {
    setCachedMap(map);
  }, [cachedMap]);

  return (
    <>
      <div className="inputTextAreaContainer">
        Cached entries: {cachedMap?.size}
        <br />
        {cachedMap?.size > 0 && `Cache size: ${memorySizeOf(cachedMap)}`}
      </div>
      <Button
        className="inputTextAreaButton"
        onClick={() => {
          localStorage.removeItem(SAVED_TRANSLATIONS_KEY);
          setCachedMap(new Map());
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
