import React from 'react';
import './Nav.styles.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='nav-links'>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/allquotes'>
          <li>All Quotes</li>
        </Link>
        <Link to='/searchquotes'>
          <li>Search Quote</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
