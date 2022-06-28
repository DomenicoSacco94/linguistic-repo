import React, {useState} from 'react';
import './App.css'
import {TextEditor} from "./components/TextEditor";
import {ReadingGui} from "./components/ReadingGui";

//TODO PRESERVE FORMATTING
//TODO CREATE WIZARDS
//TODO IMPLEMENT TESTS
export const App = () => {
  const [toTranslate, setToTranslate] = useState('Please enter your text to translate.')

  return (
     <>
     <TextEditor setToTranslate={setToTranslate} />
     <ReadingGui text={toTranslate} />
     </>
  );
}

export default App;
