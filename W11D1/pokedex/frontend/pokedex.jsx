import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions'
import * as APIUtil from './util/api_util'

// import rootReducer from './reducers/root_reducer'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.requestAllPokemon = requestAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = APIUtil.fetchAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>PokeDex</h1>, root);
});
