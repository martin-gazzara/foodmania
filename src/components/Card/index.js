import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { getRecipe } from '../../store/actions';
import Favorite from '@material-ui/icons/Favorite';

import { rankFormatter } from '../../utils';

import './card.styles.scss';

const Card = ({title, image_url, social_rank, publisher, recipe_id, getRecipe}) => {
  return(
    <div className='cardContainer'>
      <Link to='/Recipe' className="removeUnderline" onClick={ () => getRecipe(recipe_id)}>
        <div className="imageContainer">
          <img src={image_url} className='image' alt={'No picture to show'}/>
        </div>

        <div className='footer'>

          <div className='score'>
            <Favorite className='icon'/>
            <p className='scoreValue'>{rankFormatter(social_rank)}</p>
          </div>

          <div>
            <p className='publisher'>by {publisher}</p>
          </div>
          
        </div>
      </Link>
    </div>
  )
}

const mapDispatchToProps = {
  getRecipe
}

export default connect(null, mapDispatchToProps)(Card);