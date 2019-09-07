import { takeEvery, put, call, delay } from 'redux-saga/effects';

import {
  GET_ALL_RECIPES,
  GET_ALL_RECIPES_FAILED,
  GET_ALL_RECIPES_SUCCESS
} from './actions';

import { getAllRecipesService } from '../api'

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
  }
}

export default function* rootSaga(){
  yield takeEvery(GET_ALL_RECIPES, getAllRecipesWorker);
}