import React, {useEffect, useState} from 'react';
import DisplayPokemon from './DisplayPokemon';

const Pokemon = () => {

    const [pokemon, setPokemon] = useState([{
        name: "bulbasaur", 
        url: "https://pokeapi.co/api/v2/pokemon/1/"
    }]);

    const [clicked, setClicked] = useState(false)

    const onClick = e => {
        fetch("https://pokeapi.co/api/v2/pokemon")
          .then(response => {
            return response.json();
        }).then(response => {
            setPokemon(response.results);
        }).catch(err=>{
            console.log(err);
        })
        clicked?
        setClicked(false):
        setClicked(true)
    }
    
    return(
        <div>
            <button
                onClick={ onClick }
                type="button"
                className="button">
                Fetch Pokemon
            </button>
            <DisplayPokemon pokemon={pokemon}/>
        </div>
    )
}
export default Pokemon;