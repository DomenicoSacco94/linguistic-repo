import React, {useState} from 'react';
import './App.css'
import {TextEditor} from "./components/TextEditor";
import {ReadingGui} from "./components/ReadingGui";

//TODO CHANGE BUTTON STYLE
//TODO CREATE WIZARD FOR ENTERING THE TEXT AND THEN DISPLAYING IT
//TODO MAKE IT FLEXIBLE TO DIFFERENT LANGUAGES
//TODO IMPLEMENT TESTS
export const App = () => {
  const [toTranslate, setToTranslate] = useState('')

  return (
     <>
     <TextEditor setToTranslate={setToTranslate} />
     <ReadingGui text={toTranslate} />
     </>
  );
}

export default App;
