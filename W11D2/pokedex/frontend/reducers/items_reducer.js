import {RECEIVE_POKEMON} from '../actions/pokemon_actions'


const itemsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_POKEMON:
            // debugger
            return Object.assign({}, state, action.entity.items)
        default:
            return state;
    }
}

export default itemsReducer