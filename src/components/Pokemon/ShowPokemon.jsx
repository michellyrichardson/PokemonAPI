import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ShowPokemon = ({idx, thisPokemon}) => {

    const [picture, setPicture] = useState("")
    
    const getOnePokemon = (url) => {
        axios.get(url)
            .then(response => {
                console.log(response);
                setPicture(response.data.sprites.front_default)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getOnePokemon(thisPokemon.url);
    }, [])
    
    return (
        
        <div className="flex-container">
            <img src={picture}></img>
            <br></br>
            <p>{thisPokemon.name}</p>
        </div>
    )
}
export default ShowPokemon; 