import React from 'react';
import './App.css';
import { TextEditor } from './components/TextEditor';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { ReadingGui } from './components/readingGui/ReadingGui';
import { ImportFile } from './components/ImportFile';
import { BooksList } from './components/books/BooksList';

//TODO MAKE IT FLEXIBLE TO DIFFERENT LANGUAGES
//TODO CUSTOMIZE NUMBER ITEMS PER PAGE THOUGH LIST

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="linguistic-repo/*">
          <Route index element={<TextEditor />} />
          <Route path="import" element={<ImportFile />} />
          <Route path="read" element={<ReadingGui />} />
          <Route path="books" element={<BooksList />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
