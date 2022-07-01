import React from 'react';
import './App.css'
import {TextEditor} from "./components/TextEditor";
import {Route, Routes} from 'react-router-dom';
import {Navigation} from "./components/Navigation";
import {ReadingGui} from "./components/readingGui/ReadingGui";
import {ImportFile} from "./components/ImportFile";

//TODO DOCKERFILE
//TODO DEPLOY
//TODO CHECK RESPONSIVE LAYOUT
//TODO MAKE IT FLEXIBLE TO DIFFERENT LANGUAGES
//TODO CUSTOMIZE NUMBER ITEMS PER PAGE THOUGH LIST

export const App = () => {
    return <>
        <Navigation/>

        <Routes>
            <Route path="" element={<TextEditor/>}/>
            <Route path="import" element={<ImportFile/>}/>
            <Route path="editor" element={<TextEditor/>}/>
            <Route path="read" element={<ReadingGui/>}/>
        </Routes>
    </>

}

export default App;
