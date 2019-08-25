import React from 'react';
import { Link } from 'react-router-dom';

const Second = () => {
  return(
    <div>
      Second screen
      <div>
        <Link to='/'>Go Home screen</Link>
      </div>
    </div>
  )
}

export default Second;