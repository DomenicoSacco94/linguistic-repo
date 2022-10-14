import React from 'react';
import { Link } from 'react-router-dom';
import { SiteRoutes } from './Index';
import { IndexItem } from '../types/IndexItem';
import {
  ROOT_PATH,
  SAVED_TEXT_KEY,
  SAVED_TRANSLATIONS_KEY,
} from '../utils/constants';
import { Button } from 'antd';

export const Navigation = () => {
  return (
    <nav className="navBar">
      <Button
        onClick={() => {
          localStorage.removeItem(SAVED_TRANSLATIONS_KEY);
          localStorage.removeItem(SAVED_TEXT_KEY);
        }}
      >
        Clear Cache
      </Button>
      {SiteRoutes.map(
        (route: IndexItem) =>
          !route.hide && (
            <Link
              key={route.title}
              className="navLink"
              to={`${ROOT_PATH + '/' + route.path}`}
            >
              {route.title}
            </Link>
          )
      )}
    </nav>
  );
};
