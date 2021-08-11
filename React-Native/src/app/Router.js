import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from "react-native";

import {Character,HomePage} from '../pages';
import  {PaginaError} from './PaginaError'



const Stack = createStackNavigator();

export const Router = () =>{
    const [futurama,setFuturama] = React.useState("");

    console.log(futurama);

    // function handleSetfuturama(futurama){
    //     setFuturama(futurama);
    //     }
        
    return(
      <NavigationContainer>
      <Stack.Navigator 
        screenOptions ={{
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign:'center'
        } }
        
      >
        <Stack.Screen
          // path="/"
          name="HomePage"
          component={HomePage}
          // setFuturama={handleSetfuturama}
          options={{title: 'Bienvenido',}}       
       
        />
        <Stack.Screen 
          // path="/info"
          name="Character" 
          // futurama={futurama}
          component={Character} 
          options={{  title: 'Resultado de Personaje' }}
        />
        <Stack.Screen 
          // path="/error"
          name="PaginaError"           
          options={{ title: 'Error'}}
          component={PaginaError} />
      </Stack.Navigator>
    </NavigationContainer>

    )


}



