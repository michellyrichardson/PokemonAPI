import React from 'react';
import ShowPokemon from './ShowPokemon';

const DisplayPokemon = ({pokemon}) => {
    
    return(
        <div>
            { pokemon.map((val, idx) =>
                <ShowPokemon key={idx} thisPokemon={val} />
            )}
        </div>
    )
}
export default DisplayPokemon; 