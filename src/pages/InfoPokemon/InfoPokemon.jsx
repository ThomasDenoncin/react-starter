import React from 'react';
import { pokemonState } from '../../stores/pokemon.store';
import { useRecoilState } from 'recoil';


export default function InfoPokemon() {
    const [pokemon] = useRecoilState(pokemonState);

    return(
        <p>Infos sur le pokemon: {pokemon.name}</p>
    );
}