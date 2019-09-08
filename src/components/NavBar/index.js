import React from 'react'
import { connect } from 'react-redux';
import { getAllRecipes } from '../../store/actions';
import { Link } from 'react-router-dom';
import Searcher from '../Searcher/index'
import './navBar.styles.scss';

const NavBar = (props) => {
  return(
    <div className="navBarContainer">
      <Link to='/' className='navBarItem' onClick={props.getAllRecipes}>Home</Link>
      <Link to='/about' className='navBarItem'>About</Link>
      <Searcher/>
    </div>
  )
}

const mapDispatchToProps = {
  getAllRecipes
}

export default connect(null, mapDispatchToProps)(NavBar);