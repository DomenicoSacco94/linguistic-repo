import React, {useState} from 'react';
import './App.css'
import {TextEditor} from "./components/TextEditor";
import {ReadingGui} from "./components/ReadingGui";

//TODO TRANSLATE WHOLE SENTENCE
//TODO FIX BUTTONS AND THE TWO MODULES STYLING WITH FLEXBOX
export const App = () => {
  const [toTranslate, setToTranslate] = useState('Please enter your text to translate')

  return (
     <>
     <TextEditor setToTranslate={setToTranslate} />
     <ReadingGui text={toTranslate} />
     </>
  );
}

export default App;
