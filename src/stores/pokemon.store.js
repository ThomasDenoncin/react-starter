import {
  atom,
  selector,
} from 'recoil';

import mickey from './../assets/images/mickey.png'

const pokemonInitialState = atom({
    key: 'pokemonInitialState',
    default: {
        id:null,
        name: 'Michel',
        sprite_default: mickey,
        weigth: null,
        height: null,
    }
});

export const pokemonState = selector({
    key: 'pokemonState', 
    get: ({get}) => {
        const pokemon = get(pokemonInitialState);
        const sprite =
            pokemon.sprite_default ?
            pokemon.sprite_default :
            pokemon.sprites.front_default;

        return {...pokemon, sprite};
    },
    set: ({set}, payload) => {
        const newState = {...pokemonInitialState};
        switch (payload.action) {
            case 'changeName':
                newState.name = payload.name;
                return set(pokemonInitialState, newState);
            case 'catchPokemon':
                return set(pokemonInitialState, payload.pokemon)
                
        }
    }
})
