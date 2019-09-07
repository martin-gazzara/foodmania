import {
  GET_ALL_RECIPES,
  GET_ALL_RECIPES_SUCCESS,
  GET_ALL_RECIPES_FAILED
} from './actions';

import {response} from '../api/mockData/allRecipes';

const initialState = {
  recipes: response.recipes,
  loading: false,
  error: false,
}

const rootReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case GET_ALL_RECIPES:
      return{
        ...state,
        loading: true
      }
    case GET_ALL_RECIPES_SUCCESS:
      return{
        ...state,
        recipes: payload.recipes,
        loading: false
      }
    case GET_ALL_RECIPES_FAILED:
      return{
        ...state,
        error: true,
        loading: false
      }
    default:
      return{
        ...state
      }
  }
}

export default rootReducer;