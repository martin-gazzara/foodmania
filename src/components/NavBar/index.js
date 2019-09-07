import React from 'react';
import { Link } from 'react-router-dom';
import Searcher from '../Searcher/index'
import './navBar.styles.scss';

const NavBar = () => {
  return(
    <div className="navBarContainer">
      <Link to='/' className='navBarItem'>Home</Link>
      <Link to='/about' className='navBarItem'>About</Link>
      <Searcher/>
    </div>
  )
}

export default NavBar;