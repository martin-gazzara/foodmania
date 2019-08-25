import React from 'react';
import { Link } from 'react-router-dom';
import get from 'lodash/get';

import Header from '../../components/Header';
import Card from '../../components/Card';

import './home.styles.scss';

import { response } from '../../api/mockData/allRecipes';

const Home = (props) => {
  const recipes = get(response, 'recipes', []);
  return (
    <div className="Home">
      <Header/>
      <div className='recipesContainer'>
        {recipes.map( (recipe, index) => <Card key={index} {...recipe}/>)}
      </div>
    </div>
  )
}

export default Home;