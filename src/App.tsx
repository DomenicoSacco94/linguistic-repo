import React from 'react';
import './App.css'
import {TextEditor} from "./components/TextEditor";
import {ReadingGui} from "./components/ReadingGui";

//TODO CREATE WIZARD FOR ENTERING THE TEXT AND THEN DISPLAYING IT
//TODO IMPLEMENT PAGINATION FOR LONGER TEXTS
//TODO MAKE IT FLEXIBLE TO DIFFERENT LANGUAGES
//TODO IMPLEMENT TESTS

export const App = () => {
  return (
     <>
     <TextEditor/>
     <ReadingGui/>
     </>
  );
}

export default App;
