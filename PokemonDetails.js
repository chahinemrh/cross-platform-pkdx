import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  Image
} from 'react-native';

export default class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      pokemon: {}
    }
  }

  componentDidMount() {
    this.getPokemonId();
  }

  getPokemonId() {
    const { params } = this.props.route;
    const pokemon = params ? params.pokemon : null;

    this.setState({ pokemon: pokemon });

    this.fetchPokemonDetails(pokemon.url)
  }

  async fetchPokemonDetails(url) {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json();

    this.setState({ pokemon: data });

    this.state.pokemon.image = data.sprites.front_default;
    this.setState(this.state.pokemon);
  }

  render() {
    return (
      <ScrollView >
       
      </ScrollView>
    );
  }
}