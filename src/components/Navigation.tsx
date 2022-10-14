import React from 'react';
import { Link } from 'react-router-dom';
import { SiteRoutes } from './Index';
import { IndexItem } from '../types/IndexItem';
import { ROOT_PATH } from '../utils/constants';
import { ClearCacheButton } from './ClearCacheButton';

export const Navigation = () => {
  return (
    <nav className="navBar">
      <ClearCacheButton />
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
