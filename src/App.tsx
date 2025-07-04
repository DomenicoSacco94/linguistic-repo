import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { SiteRoutes } from './components/Index';
import { IndexItem } from './types/IndexItem';
import { READ_INPUT_PATH, ROOT_PATH } from './utils/constants';

//TODO RETRIEVE MORE THAN 1 SENTENCE AND SAVE THEM IN LOCALSTORAGE
//TODO MAKE IT FLEXIBLE TO DIFFERENT LANGUAGES
//TODO CUSTOMIZE NUMBER ITEMS PER PAGE THOUGH LIST

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={`${ROOT_PATH}`}>
          <Route index element={<Navigate to={`${READ_INPUT_PATH}`} />} />
          {SiteRoutes.map((route: IndexItem) => (
            <Route
              key={route.title}
              path={route.path}
              element={route.component}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default App;
