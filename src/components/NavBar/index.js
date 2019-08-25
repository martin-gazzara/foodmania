import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.styles.scss';

const NavBar = () => {
  return(
    <div className="navBarContainer">
      <Link to='/' className='navBarItem'>Home</Link>
      <Link to='/second' className='navBarItem'>Search</Link>
      <Link to='/third' className='navBarItem'>About</Link>
    </div>
  )
}

export default NavBar;