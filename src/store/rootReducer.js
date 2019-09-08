import {
  GET_ALL_RECIPES,
  GET_ALL_RECIPES_SUCCESS,
  GET_ALL_RECIPES_FAILED,
  GET_RECIPE,
  GET_RECIPE_FAILED,
  GET_RECIPE_SUCCESS,
  SEARCH_RECIPES,
  SEARCH_RECIPES_FAILED,
  SEARCH_RECIPES_SUCCESS
} from './actions';

const initialState = {
  recipes: [],
  loading: false,
  error: false,
  recipe: null,
  recipeLoading: false,
  recipeError: false,
  querySearch: null,
}

const rootReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case GET_ALL_RECIPES:
      return{
        ...state,
        loading: true,
        error: false,
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
    case GET_RECIPE:
      return{
        ...state,
       recipeLoading: true,
       recipeError: false
      }
    case GET_RECIPE_SUCCESS:
      return{
        ...state,
        recipe: payload.recipe,
        recipeLoading: false
      }
    case GET_RECIPE_FAILED:
      return{
        ...state,
        recipeError: true,
        recipeLoading: false
      }
    case SEARCH_RECIPES:
      return{
        ...state,
        loading: true,
        error: false,
        querySearch: payload.query
      }
    case SEARCH_RECIPES_FAILED:
      return{
        ...state,
        loading: false,
        error: true
      }
    case SEARCH_RECIPES_SUCCESS:
      return{
        ...state,
        loading: false,
        recipes: payload.searchResult,
        querySearch: null
      }
    default:
      return{
        ...state
      }
  }
}

export default rootReducer;