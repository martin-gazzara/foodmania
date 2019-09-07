export const GET_ALL_RECIPES = 'GET_ALL_RECIPES/request';
export const GET_ALL_RECIPES_SUCCESS = 'GET_ALL_RECIPES/success';
export const GET_ALL_RECIPES_FAILED = 'GET_ALL_RECIPES/failed';

export function getAllRecipes(){
  return {
    type: GET_ALL_RECIPES
  }
}