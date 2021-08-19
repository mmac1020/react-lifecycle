import React from 'react'

const SinglePokemon = (props) => {
  // const id = props.id;
  // const name = props.name;
  console.log(`Single Pokemon Props:`, props);
  const { id, name, number, type1, type2, image } = props;
  return (
    <div>
      <img src={image} />
      <div>
        <h2>name: {name}</h2>
        <div>number: {number}</div>
        <div>type1: {type1}</div>
        <div>type2: {type2}</div>
      </div>
    </div>
  );
};

export default SinglePokemon;
