import React from 'react';
import SinglePokemon from './SinglePokemon';
// Axios is a promised based HTTP client for JavaScript that can be used in the frontend
import axios from 'axios';

class Pokemon extends React.Component {
  constructor(props) {
    // If we don't take props and call super(props)
    // Our component will actually run fine, unless we try to access props IN the constructor
    // React by default will put the props on the component AFTER the constructor runs.
    // React will set up this.props AFTER the constructor completes.
    super(props);
    console.log('-------------- CONSTRUCTOR CALLED ---------------- ');
    this.state = {
      pokemon: [],
      // something: this.props.something
      trainer: {},
    };
  }

  async componentDidMount() {
    console.log('------------ COMPONENT MOUNTED --------------- ');
    // I will do my AJAX requests here.
    try {
      const response = await axios.get('/pokemon');
      console.log('response', response);
      const data = response.data;
      console.log(data);
      this.setState({
        pokemon: data,
        trainer: {
          name: 'Ash',
          age: 12,
          favoritePokemon: {
            name: 'Pikachu',
          },
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    console.log('-------------- RENDER CALLED ----------------- ');
    console.log('state:', this.state);
    // Always remember: an initial render happens BEFORE the component mounts.
    // Pay attention to what you are trying to render. It may fail because the data is not there yet
    const favoritePokemon = this.state.trainer.favoritePokemon
      ? this.state.trainer.favoritePokemon
      : { name: 'default' };
    return (
      <div>
        <h1>Pokemon rendering</h1>
        <div>
          <div>Trainer Name: {this.state.trainer.name}</div>
          <div>Trainer Age: {this.state.trainer.age}</div>
          <div>Favorite Pokemon: {favoritePokemon.name}</div>
        </div>
        <div>
          <div>
            {this.state.pokemon.map((pokemon) => {
              return (
                // This is what REACT does
                // <SinglePokemon (
                //   {
                //     id: pokemon.id,
                //     name: pokemon.name,
                //     number: pokemon.number,
                //     type1: pokemon.type1,
                //     type2: pokemon.type2,
                //     image: pokemon.imageUrl
                //   })
                //   />
                <SinglePokemon
                  key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
                  number={pokemon.number}
                  type1={pokemon.type1}
                  type2={pokemon.type2}
                  image={pokemon.imageUrl}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Pokemon;
