import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import get from 'lodash/get';

import Header from '../../components/Header';
import Loader from '../../components/Loader';

import './recipe.styles.scss';

const Recipe = (props) => {
  const loading = get(props, 'recipeLoading', false);
  const error = get(props, 'recipeError', false);
  const ingredients = get(props.recipe, 'ingredients', []);
  const title = get(props.recipe, 'title', null);
  const image_url = get(props.recipe, 'image_url', null);
  return(
    <div className='recipe'>

      <Header/>

      {loading ? <Loader/> :
        error ? <p className='errorMessage'>We couldn't get the recipe</p> :
      <div className='container'>
        <div className='title'>
          <h1>{title}</h1>
        </div>
        <img src={image_url} className='image'/>
        <div className='ingredientsContainer'>
          <ul>
            {ingredients.map( (ingredient, index) => <li key={index}>{ingredient}</li>)}
          </ul>
        </div>
      </div>}

    </div>
  )
}

const mapStateToProps = ({recipe, recipeLoading, recipeError}) => ({
  recipe,
  recipeLoading,
  recipeError
})

export default connect(mapStateToProps)(Recipe);