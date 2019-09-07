import { response as allRecipes } from './mockData/allRecipes';
import axios from 'axios';

const APIkey = '90cbf30f75fe80d75c78417f49dc2d96';

const getAllRecipesService = () => {
  // return axios.get(`https://www.food2fork.com/api/search?key=${APIkey}`)
  //   .then(response => response.data)
  //   .catch(err => console.log('err', err))
  return allRecipes;
}

export {
  getAllRecipesService
}