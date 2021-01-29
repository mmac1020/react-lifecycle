import React, { Component } from 'react'
import SinglePokemon from './SinglePokemon'
// Axios is a promised based HTTP client for JavaScript that can be used in the frontend
import axios from 'axios'

class Pokemon extends Component {
  constructor(props) {
    console.log('---------Called from the constructor--------')
    // super keyword is used to access and call functions in object's parent
		// Do you need to pass props? Technically, not all the time
		// Because React assigns props on instance right after calling our constructor
		// You can't use `this` in a constructor until after the we've called the parent constructor
		// So, that means, if we need to use `this.props` somewhere, it'll be undefined
		// between `super` and end of constructor. So, it's safter to just pass props all the time
    super(props) // Important
    this.state = {
      pokemon: [],
      error: false
    }
    this.generateError = this.generateError.bind(this)
  }

  // Generate a fake error
  generateError() {
    this.setState({ error: true })
  }

  async componentDidMount() {
    console.log('---------Called from the componentDidMount--------')
    // Simulating something that needs to be removed
    // An example of a use of this is if we need to call a weather API every 10 minutes to get the weather
    this.annoyingInterval = setInterval(() => console.log('Annoying Interval'), 300)
    try {
      const { data } = await axios.get('/pokemon')
      this.setState({ pokemon: data })
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
