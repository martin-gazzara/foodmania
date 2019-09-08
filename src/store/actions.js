export const GET_ALL_RECIPES = 'GET_ALL_RECIPES/request';
export const GET_ALL_RECIPES_SUCCESS = 'GET_ALL_RECIPES/success';
export const GET_ALL_RECIPES_FAILED = 'GET_ALL_RECIPES/failed';

export const GET_RECIPE = 'GET_RECIPE/request';
export const GET_RECIPE_SUCCESS = 'GET_RECIPE/success';
export const GET_RECIPE_FAILED = 'GET_RECIPE/failed';

export const SEARCH_RECIPES = 'SEARCH_RECIPES/request';
export const SEARCH_RECIPES_SUCCESS = 'SEARCH_RECIPES/success';
export const SEARCH_RECIPES_FAILED = 'SEARCH_RECIPES/failed';

export function getAllRecipes(){
  return {
    type: GET_ALL_RECIPES
  }
}

export function getRecipe(recipeId){
  return{
    type: GET_RECIPE,
    payload: {
      recipeId
    }
  }
}

export function searchRecipes(query){
  return{
    type: SEARCH_RECIPES,
    payload:{
      query
    }
  }
}