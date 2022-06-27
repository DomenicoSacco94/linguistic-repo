import React, {useState} from 'react';
import {TextEditor} from "./components/TextEditor";
import {ReadingGui} from "./components/ReadingGui";

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
