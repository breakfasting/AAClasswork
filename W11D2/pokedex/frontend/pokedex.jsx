import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import { receiveAllPokemon, requestAllPokemon, requestSinglePokemon, receivePokemon} from './actions/pokemon_actions'
import * as APIUtil from './util/api_util'
import {selectAllPokemon} from './reducers/selectors'
import Root from './components/root'
import { HashRouter, Route } from "react-router-dom";

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.receivePokemon = receivePokemon;
  window.requestSinglePokemon = requestSinglePokemon;
  window.selectAllPokemon = selectAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = APIUtil.fetchAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
