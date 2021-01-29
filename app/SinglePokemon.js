import React from 'react'

const SinglePokemon = (props) => {
    const { imgUrl, name, number, type1, type2 } = props

    return (
        <div>
            <img src={imgUrl} />
            <div>
                <h2>{name}</h2><br />
                <b>Number: </b>{number}<br />
                <b>Type 1: </b>{type1}<br />
                <b>Type 2: </b>{type2}<br />
            </div>
            
        </div>
    )
}

export default SinglePokemon