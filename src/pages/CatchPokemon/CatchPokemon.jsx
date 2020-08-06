import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useRecoilState } from 'recoil';
import getRandomIntInclusive from '../../utils/getRandomIntInclusive';
import { pokemonState } from '../../stores/pokemon.store';


export default function CatchPokemon() {
    const [{pokemon, pokemonSprite}, setPokemon] = useRecoilState(pokemonState);
    const numberMaxPokemon = 151;

    console.log(pokemon);

    function catchPokemon (){
        const numPoke = getRandomIntInclusive(1, numberMaxPokemon)
        Axios
            .get(
                `https://pokeapi.co/api/v2/pokemon/${numPoke}`)
            .then(resp =>{
                    const catchedPokemon = {...resp.data};
                    setPokemon({
                        action:'catchPokemon',
                        pokemon: catchedPokemon
                    });
                    console.log(pokemon);
                })
                .catch(err =>{ console.log(err.code)});             
    }
        
    return(
        <div>
            <p>Nombre de pokemons disponibles : {numberMaxPokemon} </p>
            <div className="content-panel">
                <h1>{pokemon.id || '-'}</h1>
                <img src={pokemonSprite} />
                <h2>{pokemon.name}</h2>
                <button className="btn--danger" onClick={catchPokemon}>Catch new</button>
            </div>
        </div>    
    );
}