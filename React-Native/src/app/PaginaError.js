import React from 'react';
import { Button, StyleSheet, Text, View, ImageBackground,Image} from "react-native";
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';

import background from '../img/back2.jpg';


export const PaginaError = ({navigation}) => {

    const Separator = () => (
        <View style={ErrorStyle.separator} />
      );

    var errorGif = [
        "https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif",
        "https://media.giphy.com/media/xTiN0L7EW5trfOvEk0/giphy.gif",
        "https://media.giphy.com/media/nVTa8D8zJUc2A/giphy.gif",
         "https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif"
   ]
   
   var randomGif = errorGif[Math.floor(Math.random()*errorGif.length)];

   return (
           
       <View style={ErrorStyle.baseError} >
          <ImageBackground source={background} resizeMode="cover" style={ErrorStyle.image}> 
           <View style={ErrorStyle.baseError}> 
                <View style={ErrorStyle.gif} >
                <Image
          style={{ width: '100%', height: '100%' }}
          source={{ uri: "https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif" }}
        />
                </View>
                <Separator/>
               <Text style={ErrorStyle.h}>Lo sentimos</Text>
               <Text style={ErrorStyle.p}>La pagina solicitada no se encuentra</Text>
               <Text style={ErrorStyle.p}>Presione la flecha de atras en la Cabecera,</Text>
               <Text style={ErrorStyle.p}>si quiere realizar una nueva busqueda</Text>
           </View> 
           </ImageBackground>            
       </View>    
   );
}

const ErrorStyle = StyleSheet.create({
    baseError: {
        width: '100%',
        height:'100%',
        // border: 'none',
        // borderRadius: '6',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',    
    },
    image: {
        width: '100%',
        height:'100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',         
      },
      gif:{
        width: '82%',
        height: '40%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',        
      },
      h:{
        fontFamily: 'notoserif',
        fontStyle: 'italic',
        color: 'red',
        fontSize: 25, 
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
      },
      p:{
        fontFamily: 'sans-serif-light',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        fontSize: 20,
      },
      separator: {
        marginVertical: 4,     
      },
});

