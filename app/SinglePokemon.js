import React from 'react'

const SinglePokemon = (props) => {
    const { changePokemonName, imageUrl, name, number, type1, type2 } = props
    return (
        <div>
            <img src={imageUrl} />
            <div>
                <h2>{name}</h2><br />
                <button onClick={changePokemonName}>Click me to change the name </button>
                <b>Number: </b>{number}<br />
                <b>Type 1: </b>{type1}<br />
                <b>Type 2: </b>{type2}<br />
            </div>

        </div>
    )
}

export default SinglePokemon
