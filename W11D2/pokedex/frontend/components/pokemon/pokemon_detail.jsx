import React from 'react';
import ItemDetailContainer from './item_detail_container'
import {Route} from 'react-router-dom'
class PokemonDetail extends React.Component {
  componentDidMount() {
    this.props.requestSinglePokemon();
  }

  componentDidUpdate(prevProps) {
      if (prevProps.match.params.id !== this.props.match.params.id){
        this.props.requestSinglePokemon();
      }
  }

  render() {
      // debugger
    return (
      <div className="details-container">
        <div className="details">
          {this.props.pokemon &&
            Object.keys(this.props.pokemon).map((key) => {
              let value =
                key === "image_url" ? (
                  <img src={this.props.pokemon[key]} />
                ) : (
                  <span>{this.props.pokemon[key]}</span>
                );
              return (
                <div key={key}>
                  {key}: {value}
                </div>
              );
            })}
          <Route
            path="/pokemon/:pokemonId/item/:itemId"
            component={ItemDetailContainer}
          />
        </div>
      </div>
    );
  }
}

export default PokemonDetail;