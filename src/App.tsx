import React from 'react';
import './App.css'
import {TextEditor} from "./components/TextEditor";
import {ReadingGui} from "./components/ReadingGui";
import { Routes, Route} from 'react-router-dom';
import {Navigation} from "./components/Navigation";

//TODO IMPLEMENT PAGINATION FOR LONGER TEXTS
//TODO IMPLEMENT LARGE IMPORT FROM WEBPAGE AS SINGLE TEXT
//TODO MAKE IT FLEXIBLE TO DIFFERENT LANGUAGES
//TODO IMPLEMENT TESTS

export const App = () => {
  return <>
      <Navigation />

      <Routes>
          <Route path="" element={<TextEditor/>} />
          <Route path="editor" element={<TextEditor/>} />
          <Route path="read" element={<ReadingGui/>} />
      </Routes>
      </>

}

export default App;
