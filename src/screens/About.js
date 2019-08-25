import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const About = () => {
  return(
    <div>
      <Header/>
      <div>
        <Link to='/'>Go Home screen</Link>
      </div>
    </div>
  )
}

export default About;