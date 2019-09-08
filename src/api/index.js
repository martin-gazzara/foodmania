import { response as allRecipes } from './mockData/allRecipes';
import { response as recipe } from './mockData/recipe';
import axios from 'axios';

const APIkey = '90cbf30f75fe80d75c78417f49dc2d96';

const getAllRecipesService = () => {
  return axios.get(`https://www.food2fork.com/api/search?key=${APIkey}`)
    .then(response => response.data)
    .catch(err => console.log('err', err))
}

const getRecipeService = (recipeId) => {
  return axios.get(`https://www.food2fork.com/api/get?key=${APIkey}&rId=${recipeId}`)
    .then(response => response.data)
    .catch(err => console.log('err', err))
}

const searchRecipesService = (query) => {
  return axios.get(`https://www.food2fork.com/api/search?key=${APIkey}&q=${query}`)
    .then( response => response.data.recipes)
    .catch(err => console.log(err));
}

export {
  getAllRecipesService,
  getRecipeService,
  searchRecipesService
}