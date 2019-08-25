import React from 'react';
import imageSrc from '../../assets/image/logo.png';
import './header.styles.scss';
import NavBar from '../NavBar';

const Header = () => {
  return(
    <div className="logoContainer">
      <img
        src={imageSrc}
        className="logo"
        alt="logo"
      />
      <NavBar/>
    </div>
  )
}

export default Header;