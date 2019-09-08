import { takeEvery, put, call, delay } from 'redux-saga/effects';

import {
  GET_ALL_RECIPES,
  GET_ALL_RECIPES_FAILED,
  GET_ALL_RECIPES_SUCCESS,
  GET_RECIPE,
  GET_RECIPE_FAILED,
  GET_RECIPE_SUCCESS,
  SEARCH_RECIPES,
  SEARCH_RECIPES_FAILED,
  SEARCH_RECIPES_SUCCESS
} from './actions';

import { getAllRecipesService, getRecipeService, searchRecipesService } from '../api'

export function* getAllRecipesWorker(){
  try{
    const { count, recipes } = yield call(getAllRecipesService);
    yield put({
      type: GET_ALL_RECIPES_SUCCESS,
      payload:{
        count,
        recipes
      }
    })
  }catch(err){
    console.log(err);
    yield put({
      type: GET_ALL_RECIPES_FAILED
    })
  }
}

export function* getRecipeWorker({payload}){
  try{
    const { recipeId } = payload;
    const { recipe } = yield call(getRecipeService, recipeId);
    yield put({
      type: GET_RECIPE_SUCCESS,
      payload:{
        recipe
      }
    })
  }catch(err){
    console.log(err);
    yield put({
      type: GET_RECIPE_FAILED
    })
  }
}

export function* searchRecipeWorker({payload}){
  try{
    const query = encodeURIComponent(payload.query);
    const searchResult = yield call(searchRecipesService, query);
    yield put({
      type: SEARCH_RECIPES_SUCCESS,
      payload: {
        searchResult
      }
    })
  }catch(err){
    console.log('err', err);
  }
}

export default function* rootSaga(){
  yield takeEvery(GET_ALL_RECIPES, getAllRecipesWorker);
  yield takeEvery(GET_RECIPE, getRecipeWorker);
  yield takeEvery(SEARCH_RECIPES, searchRecipeWorker);
}