import React from 'react';
import { useRecoilValue } from 'recoil';
import { pokemonState } from '../../stores/pokemon.store';

export default function Home() {
    const {pokemon, pokemonSprite} = useRecoilValue(pokemonState);

    return(
        <div className="content-panel">
            <h1>{pokemon.id || '-'}</h1>
            <img src={pokemonSprite} /> 
            <h2>{pokemon.name}</h2>
            {/* <SayMyName /> */}
            {/* <button onClick={() => setPokemon({action: 'changeName', name: 'Jeanjean'})}>Change Pokemon</button> */}
        </div>
    );
}