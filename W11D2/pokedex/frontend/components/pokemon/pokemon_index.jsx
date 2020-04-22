import React from 'react'
import PokemonIndexItem from './pokemon_index_item'
import PokemonDetailContainer from "./pokemon_detail_container";
import { Route } from 'react-router-dom'


class PokemonIndex extends React.Component {
  componentDidMount(){
    this.props.requestAllPokemon()
  }
  render() {
    return (
      <div className="main">
        <ul className="index">
        <h1>Pokemon Index</h1>
          {this.props.pokemon.map((pokemon) => (
            <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />
            ))}
        </ul>
            <Route path="/pokemon/:id" component={PokemonDetailContainer} />
      </div>
    );
  }
}

export default PokemonIndex