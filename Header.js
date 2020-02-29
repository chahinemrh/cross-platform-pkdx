
import React from 'react';
import { Header,Button,Icon } from 'react-native-elements' ;

export default class Header1 extends React.Component {

  render() {
    
    return (

      <Header
      leftComponent={ <Icon
        name='menu'
        type='Entypo'
        color='black'
        onPress={() => this.props.navigation.toggleDrawer()} />} 
              centerComponent={{ text: 'Pokédex', style: { color: 'black' } }}
      rightComponent={<Icon
        name='home'
        type='Entypo'
        color='black'
        onPress={() => this.props.navigation.toggleDrawer()} />}
      containerStyle={{
        backgroundColor: 'rgb(250,90,86)',
        justifyContent: 'space-around',
        marginBottom:5}}
    />
          
        )
      }
      }
      
      

      

