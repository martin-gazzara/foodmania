import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      Home screen
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