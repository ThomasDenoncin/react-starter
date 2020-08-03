import React from 'react';

export default function HeroKiller({dispatch}) {
    const handleKill = function(name) {
       dispatch({type: 'setSuperHeroes', payload: name});
    }

    return(
        <button onClick={() => handleKill('duperMan')}>Kill</button>
    );
}