import React, { useReducer } from 'react';
import HeroKiller from '../../components/heroKiller/HeroKiller';

const homeInitialState = {
    superHeroes: 'Batman',
    vehicules: null,
}

function homeReducer(state, action) {
    const newState = {...state};
    switch(action.type) {
        case 'setSuperHeroes':
            newState.superHeroes = action.payload;
            return newState;
        case 'setVehicules':
            newState.vehicules = !newState.vehicules ? 'Batmobile' : null;
            return newState;
        default:
            throw new Error();
    }
}

export default function Home() {
    const [state, dispatch] = useReducer(homeReducer, homeInitialState);
    
    return(
        <div>
            <h2>{state.superHeroes}</h2>
            <h3>{state.vehicules}</h3>
            <HeroKiller dispatch={dispatch} />
            <button onClick={() => dispatch({type: 'setVehicules'})}>Ride</button>
        </div>
    );
}