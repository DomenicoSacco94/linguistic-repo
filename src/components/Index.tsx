import React from 'react';
import { ImportFile } from './ImportFile';
import { ReadingGui } from './readingGui/ReadingGui';
import { IndexItem } from '../types/IndexItem';
import { TextEditor } from './TextEditor';
import { ClearCacheButton } from './ClearCacheButton';

export const SiteRoutes: IndexItem[] = [
  {
    title: 'Input text',
    path: 'input',
    component: <TextEditor />,
  },
  {
    title: 'Import text file',
    path: 'import',
    component: <ImportFile />,
  },
  {
    title: 'Read',
    path: 'read',
    component: <ReadingGui />,
    hide: true,
  },
  {
    title: 'Cached translations',
    path: 'cache',
    component: <ClearCacheButton />,
  },
];
