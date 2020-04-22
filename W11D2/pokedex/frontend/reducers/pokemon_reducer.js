import {RECEIVE_ALL_POKEMON, RECEIVE_POKEMON} from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            let nextState = Object.assign({}, state, action.pokemon)    
            return nextState;
        case RECEIVE_POKEMON:
            // debugger
            const entity = {};
            entity[action.entity.pokemon.id] = action.entity.pokemon
            return Object.assign({}, state, entity);
        default:
            return state;
    }
}

export default pokemonReducer