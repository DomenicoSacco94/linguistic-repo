import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="navBar">
      <Link className="navLink" to="linguistic-repo/import">
        Import TXT
      </Link>
      <Link className="navLink" to="linguistic-repo/">
        Input
      </Link>
      <Link className="navLink" to="linguistic-repo/read">
        Read
      </Link>
    </nav>
  );
};
