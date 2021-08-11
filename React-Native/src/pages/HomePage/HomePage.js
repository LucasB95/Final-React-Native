import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View,TextInput, Image} from "react-native";
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';

import background from '../../img/back2.jpg';
import logo from '../../img/logoFuturama.png';





export const HomePage = ({navigation}) =>{
  
   
    const [futurama,setSearchText] = React.useState('');
    const random = Math.floor(Math.random()*35);

    const Separator = () => (
      <View style={Home.separator} />
    );

    return(  

        < View style={Home.home}>  
                      <ImageBackground source={background} resizeMode="cover" style={Home.image}>  
                <View style={[Home.Wrapper]}>  
                          
                              <Image
                                  source={logo}
                                  //resizeMode="stretch"
                                  style={Home.logo}
                                  />      

                      {/* <img src={logo} alt="logo"/> */}
                      <Separator/>
                      <View style={Home.Search}>
                      <TextInput placeholder="Busca el personaje"  onChangeText={ text => setSearchText(text) }  />

                      </View>
                      <Separator/>
                    <View style={Home.button}>
                      <Button title="Buscar"
                        onPress={() => navigation.navigate('Character',{futu : futurama})}                        
                        color = 'red'                          
                        />
                      <Separator/>
                       <Button title="¡Azar!"
                        onPress={() => navigation.navigate('Character',{futu : random})} 
                        color = 'red'  
                         />
                    </View>
                </View>
                </ImageBackground>               
      </View> 
    )
}

const Home = StyleSheet.create({
  home: {
    width: '100%',
    height:'100%',
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
  logo:{
    width: '100%',
     height: '40%',
  },
  Wrapper:{
    width: '89%',
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  Search:{   
    width: '100%',
    height: '15%',
    borderRadius: 5,
    backgroundColor: 'white',
    textAlign: 'center',
  },
  separator: {
    marginVertical: 4,     
  },
})


