import React from 'react';
import { SAVED_TEXT_KEY, SAVED_TRANSLATIONS_KEY } from '../utils/constants';
import { Button } from 'antd';
import { getMapFromCache } from '../utils/translation';
import { memorySizeOf } from '../utils/fileUtils';

export const ClearCacheButton: React.FC = () => {
  const [cachedTranslationsMap, setCachedTranslationsMap] = React.useState<
    Map<string, string>
  >(getMapFromCache());

  const [cachedText, setCachedText] = React.useState<string>(
    localStorage.getItem(SAVED_TEXT_KEY)?.toString() || ''
  );

  return (
    <>
      <div className="inputTextAreaContainer">
        Cached entries: {cachedTranslationsMap?.size}
        <br />
        {cachedTranslationsMap?.size > 0 &&
          `Cache size: ${memorySizeOf(cachedTranslationsMap)}`}
        <br />
        {cachedText?.length > 0 &&
          `Uploaded file size: ${memorySizeOf(cachedText)}`}
      </div>
      <Button
        disabled={!cachedTranslationsMap?.size}
        className="inputTextAreaButton"
        onClick={() => {
          localStorage.removeItem(SAVED_TRANSLATIONS_KEY);
          setCachedTranslationsMap(new Map<string, string>());
        }}
      >
        Clear cached translations
      </Button>
      <Button
        className="inputTextAreaButton"
        disabled={!cachedText?.length}
        onClick={() => {
          localStorage.removeItem(SAVED_TEXT_KEY);
          setCachedText('');
        }}
      >
        Clear uploaded file
      </Button>
    </>
  );
};
