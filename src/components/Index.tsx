import React from 'react';
import { ImportFile } from './ImportFile';
import { ReadingGui } from './readingGui/ReadingGui';
import { BooksList } from './books/BooksList';
import { IndexItem } from '../types/IndexItem';
import { TextEditor } from './TextEditor';
import { ClearCacheButton } from './ClearCacheButton';

export const SiteRoutes: IndexItem[] = [
  {
    title: 'Input text',
    path: '',
    component: <TextEditor />,
  },
  {
    title: 'Import',
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
    title: 'Books',
    path: 'books',
    component: <BooksList />,
  },
  {
    title: 'Cache',
    path: 'cache',
    component: <ClearCacheButton />,
  },
];
