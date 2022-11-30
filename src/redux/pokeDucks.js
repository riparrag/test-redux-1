import axios from "axios";

// constants
const initialData = {array:[]};
const GET_POKEMONS = 'GET_POKEMONS';
const HOST_POKE_API = 'https://pokeapi.co';
const ENDPOINT_GET_POKE_API = '/api/v2/pokemon';


// reducer
export default function pokeReducer(state = initialData, action) {
    switch (action.type) {
        case GET_POKEMONS:

    }
}

// actions
/**
 * async calls api pokeapi
 */
export const getPokemonsAction = () => async (dispatch, getState) => {
    const response = await axios.get(HOST_POKE_API + ENDPOINT_GET_POKE_API + '?offset=0&limit=20')
}