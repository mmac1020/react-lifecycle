import React, { Component } from 'react'
import SinglePokemon from './SinglePokemon'
// Axios is a promised based HTTP client for JavaScript that can be used in the frontend
import axios from 'axios'

class Pokemon extends Component {
  constructor(props) {
    console.log('---------Called from the constructor--------')
    this.state = {
      pokemon: [],
      error: false
    }
  }

  // Generate a fake error
  generateError() {
    this.state.pokemon = true
  }

  async componentDidMount() {
    console.log('---------Called from the componentDidMount--------')
    // Simulating something that needs to be removed
    // An example of a use of this is if we need to call a weather API every 10 minutes to get the weather
    this.annoyingInterval = setInterval(() => console.log('Annoying Interval'), 300)
    try {
      const { data } = await axios.get('/pokemon')
      this.state.pokemon = data
    } catch (error) { console.log(error) }
  }

  /* 
    Before a component is unmounted (removed from the DOM), 
    componentWillUnmount is called.
    This is a good place to clean up any subscriptions or event listeners
    that may have been initialized
  */
  componentWillUnmount() {
    console.log('---------Called from the componentWillUnMount--------')
    // Removing the interval we set up in componentDidMount
    clearInterval(this.annoyingInterval)
  }

  render () {
    console.log('---------Called from the render--------')
    console.log('state-------', this.state)
    const { pokemon } = this.state
    if (this.state.error) throw new Error('Oh an Error')
    return (
      <div>
        <button onClick={this.generateError}>Click Me to Generate an Error</button>
        <h1>Pokemon: Gotta Catch 'Em All!</h1>
        {pokemon.map(poke => {
          return (
            <SinglePokemon
              key={poke.id}
              imgUrl={poke.imageUrl}
              name={poke.name}
              number={poke.number}
              type1={poke.type1}
              type2={poke.type2}
            />
          )
        })}
      </div>
    )
  }
}

export default Pokemon
