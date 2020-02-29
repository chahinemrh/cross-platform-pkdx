import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator, DrawerItem} from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Connexion from './Connexion';
import Pokedex from './Pokedex'
import Pokemon from './PokemonDetails'
import { styles } from './assets/styles';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()



function createPokedexTabs(){

  return (
    <Tab.Navigator>
      <Stack.Screen name ='Pokedex' component = {Pokedex} 
      />
    </Tab.Navigator>

  )
}



function createPokedexStack() {
  return  (
    <Stack.Navigator   headerMode="none">
      <Stack.Screen name ='Pokedex' children = {createPokedexTabs} 
     
      />
      <Stack.Screen name ='Pokemon' component = {Pokemon} />
    </Stack.Navigator>
  )

}



export default function App() {
  return (

      <NavigationContainer>
        <Drawer.Navigator drawerType='back' style={styles.drawer}>
          <Drawer.Screen name='Pokemons' children={createPokedexStack} />
          <Drawer.Screen name='Connexion' component={Connexion}></Drawer.Screen>
        </Drawer.Navigator>

      </NavigationContainer>


  );
}