import React, { Component } from 'react'
import SinglePokemon from './SinglePokemon'
// Axios is a promised based HTTP client for JavaScript that can be used in the frontend
import axios from 'axios'

class Pokemon extends Component {
  constructor() {
    console.log('------- In the constructor --------');
    super();
    this.state = {}
    // React does this under the hood
    // this.componentDidMount = this.componentDidMount.bind(this);
    // 'this' will refer to Pokemon. So we can use this.setState
    this.changePokemonName = this.changePokemonName.bind(this);
  }

  changePokemonName(id, nameToChangeTo) {
    // Imagine I change the name here
    console.log('went to change name method');
    // this.setState();
  }

  async componentDidMount() {
    console.log('-------- In Component Did Mount ---------' );
    try {
      const res = await axios.get('/pokemon')
      const data = res.data;
      this.setState({pokemon: data})
    } catch (err) {
      console.log(err);
    }
  }

  componentDidUpdate() {
    console.log('-------- In Component Did Update --------');
  }

  render() {
    console.log('-------- In the Render method --------')
    // const {pokemon} = this.state || [];
    // const pokemon = this.props.pokemon || [];
    if (!this.state.pokemon) {
      return <div>Loading</div>
    }
    return (
      <div>
        {
          this.state.pokemon.map(
            (singlePokemon) => {
              return (
                <SinglePokemon
                  key={singlePokemon.id}
                  imageUrl={singlePokemon.imageUrl}
                  name={singlePokemon.name}
                  number={singlePokemon.number}
                  type1={singlePokemon.type1}
                  type2={singlePokemon.type2}
                  changePokemonName={this.changePokemonName} />
              )
            }
          )
        }
      </div>

    )
  }
}

export default Pokemon
