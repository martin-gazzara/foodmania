import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import './home.styles.scss';

const Home = (props) => {
  return (
    <div className="Home">
      <Header/>
      <div>
        <div>
          <Link to="/second">Go to Second screen</Link>
        </div>
        <div>
          <Link to="/third">Go to Third screen</Link>
        </div>
      </div>
    </div>
  )
}

export default Home;