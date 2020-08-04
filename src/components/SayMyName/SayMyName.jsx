import React from 'react';
import { useRecoilValue } from 'recoil';
import { pokemonState } from '../../stores/pokemon.store';

export default function SayMyName() {
    const pokemon = useRecoilValue(pokemonState);

    return(
        <h3>{pokemon.name}</h3>
    )
}