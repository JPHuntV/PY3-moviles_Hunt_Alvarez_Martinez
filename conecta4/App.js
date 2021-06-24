import React from 'react'
import { StatusBar } from 'react-native'
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Inicio from './Screens/Inicio'
import NuevaPartida from './Screens/NuevaPartida'
import Partida from './Screens/Partida'


const Stack =  createStackNavigator()
export default function App(){
  return(
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="#1B1B1E"
        barStyle={'ligth-content'}
        showHideTransition={'slide'}/>
      <Stack.Navigator>
        <Stack.Screen name='Inicio' component={Inicio} options={{headerShown:false}}/>
        <Stack.Screen name='Nueva Partida' component={NuevaPartida}
          options={{
            headerTintColor:'white',
            headerTitleStyle:{color:'white'},
            headerStyle:{backgroundColor:'#1B1B1E', borderBottomColor:'white', borderBottomWidth:0.5}
          }}/>
        <Stack.Screen name='Partida' component={Partida} 
        options={{
          headerTintColor:'white',
          headerTitleStyle:{color:'white'},
          headerStyle:{backgroundColor:'#1B1B1E', borderBottomColor:'white', borderBottomWidth:0.5}
        }}/>
        {console.log('Cargó')/*quitar*/}
      </Stack.Navigator>
    </NavigationContainer>
  )
}