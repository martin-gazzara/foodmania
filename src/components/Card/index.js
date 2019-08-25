import React from 'react';
import Favorite from '@material-ui/icons/Favorite';

import './card.styles.scss';

const Card = ({title, image_url, social_rank, publisher}) => {
  return(
    <div className='cardContainer'>

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

    </div>
  )
}

export default Card;