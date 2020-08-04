import {
  atom,
  selector,
} from 'recoil';

const pokemonInitialState = atom({
    key: 'pokemonInitialState',
    default: {
        id:null,
        name: 'Michel',
        sprite: null,
        weigth: null,
        height: null,
    }
});

export const pokemonState = selector({
    key: 'pokemonState',
    get: ({get}) => {
        return get(pokemonInitialState);
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
