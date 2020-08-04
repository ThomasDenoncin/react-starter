import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useRecoilState } from 'recoil';
import getRandomIntInclusive from '../../utils/getRandomIntInclusive';
import { pokemonState } from '../../stores/pokemon.store';


export default function CatchPokemon() {
    const [pokemon, setPokemon] = useRecoilState(pokemonState);

    function catchPokemon (){
        const numPoke = getRandomIntInclusive(1, 300)
        Axios
            .get(
                `https://pokeapi.co/api/v2/pokemon/${numPoke}`)
            .then(resp =>{
                    const poke = {...resp.data};
                    poke.chiffre = numPoke
                    setPokemon({
                        action:'catchPokemon',
                        pokemon: poke
                    });
                })
                .catch(err =>{ console.log(err.code)});             
    }
    
    useEffect( ()=>{
        let mounted = false;
        if (!mounted){ 
            catchPokemon();
        }
        return ()=> mounted=true;
    },[])
        
    return(
        <div className="catchPokemon">
            <p>Nombre de pokemons disponibles : {pokemon && pokemon.name} </p>
            <button onClick={catchPokemon}> va capturer le pokemon {pokemon && pokemon.id} </button>
        </div>
        
            );
}