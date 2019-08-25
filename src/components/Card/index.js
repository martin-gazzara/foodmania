import React from 'react';
import { Link } from 'react-router-dom';
import Favorite from '@material-ui/icons/Favorite';

import './card.styles.scss';

const Card = ({title, image_url, social_rank, publisher}) => {
  return(
    <div className='cardContainer'>
      <Link to='/search' className="removeUnderline">
        <div className="imageContainer">
          <img src={image_url} className='image' alt={title}/>
        </div>

        <div className='footer'>

          <div className='score'>
            <Favorite className='icon'/>
            <text className='scoreValue'>{social_rank}</text>
          </div>

          <div>
            <text className='publisher'>by {publisher}</text>
          </div>
          
        </div>
      </Link>
    </div>
  )
}

export default Card;