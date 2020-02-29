
import React from 'react';
import { Text, SafeAreaView, View, TextInput, ScrollView, Image, Picker } from 'react-native';
import { Icon, Button } from 'react-native-elements'
import Header1 from './Header';
import { styles } from './assets/styles';
import { LongPressGestureHandler } from 'react-native-gesture-handler';
import Pokemon from './PokemonDetails';


export default class Pokedex extends React.Component {

    state = { initialPokemons: [], pokemons: [], searchFilter: 'name' }

    async fetchPokemons() {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
        let pokemons = await response.json()
        Object.values(pokemons.results).forEach((pokemon) => {

            this.fetchSinglePokemon(pokemon)
        })


    }

    async fetchSinglePokemon(pokemon) {
        const response = await fetch(pokemon.url)
        const pokeData = await response.json()
        const poket = { id: pokeData.id, name: pokeData.name, imgUrl: pokeData.sprites.front_default, height: pokeData.height, weight: pokeData.weight }
        this.setState({ pokemons: [...this.state.pokemons, poket], initialPokemons: [...this.state.pokemons, poket] })
    }

    componentDidMount() {
        this.fetchPokemons()
    }

    SearchMatchedPokmons(text) {

        const filter = String(this.state.searchFilter)
        text = String(text).toLowerCase()
        if (text == '') {
            this.setState({ pokemons: this.state.initialPokemons })
        }
        else {
            pokemons = this.state.pokemons.filter((pokemon) => {

                console.log(text, String(pokemon[filter]).toLowerCase(), typeof String(pokemon[filter]).toLowerCase(), String(pokemon[filter]).toLowerCase().includes(text))
                if (String(pokemon[filter]).toLowerCase().includes(String(text))) {
                    return pokemon
                }

            })
            this.setState({ pokemons })
            
        }





    }

    render() {

        return (
            <SafeAreaView style={styles.safeArea}>
                <Header1 navigation={this.props.navigation} name={this.constructor.name}></Header1>
                <View style={styles.inputRow}>

                    
                    <TextInput placeholder='Recherchez un pokémon' style={styles.input} onChangeText={(text) => { this.SearchMatchedPokmons(text) }}></TextInput>
                </View>
                <ScrollView style={styles.container}>
                    <View style={{ alignItems: 'center' }}>
                        {this.state.pokemons.map((pokemon) => {
                            return (
                                <View style={styles.card}>
                                    <Image source={{ uri: pokemon.imgUrl }} style={{ width: 90, height: 90 }} />
                                    <Button title={pokemon.name} buttonStyle={{ width: '100%', borderWidth: 0, backgroundColor: 'transparent' }} titleStyle={{ color: 'rgb(250,90,86)', textTransform: 'capitalize' }} onPress={() => { this.props.navigation.navigate('Pokemon', { pokemon }) }} />
                                </View>)

                        })}


                    </View>

                </ScrollView>
            </SafeAreaView>

        )
    }
}
