import React from 'react';
import { useRecoilState } from 'recoil';
import { pokemonState } from '../../stores/pokemon.store';
import SayMyName from '../../components/SayMyName/SayMyName';

export default function Home() {
    const [pokemon, setPokemon] = useRecoilState(pokemonState);

    return(
        <div className="content-panel">
            <h1>{pokemon.id || '-'}</h1>
            <img src={pokemon.sprite} /> 
            <h2>{pokemon.name}</h2>
            {/* <SayMyName /> */}
            {/* <button onClick={() => setPokemon({action: 'changeName', name: 'Jeanjean'})}>Change Pokemon</button> */}
        </div>
    );
}