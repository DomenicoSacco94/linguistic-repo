import React from 'react';
import { Link } from 'react-router-dom';
import { SiteRoutes } from './Index';
import { IndexItem } from '../types/IndexItem';

export const Navigation = () => {
  return (
    <nav className="navBar">
      {SiteRoutes.map((route: IndexItem) => (
        <Link
          key={route.title}
          className="navLink"
          to={`linguistic-repo/${route.path}`}
        >
          {route.title}
        </Link>
      ))}
    </nav>
  );
};
