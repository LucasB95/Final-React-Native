import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View,Image} from "react-native";
import 'react-native-gesture-handler';
import  {PaginaError} from '../../app/PaginaError';
import background from '../../img/back2.jpg';

export const Character = ({route,navigation} ) =>{
  
  const [futuramaData, setfuturamaData] = React.useState();
  const [status, setStatus] = React.useState("id");
  const futurama = route.params.futu;


  
  const Separator = () => (
    <View style={Pirate.separator} />
  );
   
  React.useEffect(() => { 
    setStatus("loading");
    fetch(`https://futuramaapi.herokuapp.com/api/v2/characters?search=${futurama}`).then((response) => response.json().then((data) => setfuturamaData(data)))
    .catch((error) => setStatus("error"))
    .finally(setStatus("id"));
  },[futurama])
   
     console.log(status);
     console.log(futuramaData);
  
     if(futuramaData) {
         if(futuramaData === undefined || futuramaData.map((elem) => elem.length) == 0){
                return (                    
                  <PaginaError/>              
                );
          }        
       }
      
     if (status === "id") {
        return (        
          <View style={Pirate.pirate}>
             <ImageBackground source={background} resizeMode="cover" style={Pirate.image}>  
             <Separator/>
            { futuramaData &&(  
              
                 
              <View>
                            <View style={Pirate.imgPersonaje}> 
                            <Image
           style={{ width: '100%', height: '100%' }}
          source={{ uri: "https://reactjs.org/logo-og.png" }}
        />
                                {/* <img src={futuramaData.slice(0,1).map((elem) => elem.PicUrl )     } alt="Imagen del personaje" />  */}
                             </View>
                        {/* <Separator/>
                        <Separator/> */}
                            
                        <View>                    
                            <Text style={Pirate.h}>{futuramaData.slice(0,1).map((elem) => elem.Name)}</Text>            
                            <Text style={Pirate.h2}>Edad : {futuramaData.slice(0,1).map((elem) => elem.Age)}</Text>
                            <Text style={Pirate.h2}>Primera Aparición : {futuramaData.slice(0,1).map((elem) => elem.FirstAppearance)} </Text>
                            <Text style={Pirate.h2}>Planeta : {futuramaData.slice(0,1).map((elem) => elem.Planet)} </Text>
                            <Text style={Pirate.h2}>Profesión : {futuramaData.slice(0,1).map((elem) => elem.Profession)}</Text>
                            {/* <Text style={Pirate.h2} >Familiares : {futuramaData.slice(0,1).map((elem) => elem.Relatives)}</Text> */}
                            <Text style={Pirate.h2}>Especie : {futuramaData.slice(0,1).map((elem) => elem.Species)}</Text>
                            <Text style={Pirate.h2}>Estado : {futuramaData.slice(0,1).map((elem) => elem.Status)}</Text>
                            <Text style={Pirate.h2}>Interpretado por : {futuramaData.slice(0,1).map((elem) => elem.VoicedBy)}</Text>
                        <Separator/>
                        <Button title="Volver a Home" onPress={() =>navigation.navigate('HomePage')} color = 'red'   />
                        </View >                     
                    </View>  
                    )}
                  </ImageBackground>
       </View>
             
        );
      } else if (status === "loading") {
        return "Cargando...";
      }else if (status === "error" ) { 
        return (
          <PaginaError/>
        );
      } 
                   
    };
    const Pirate = StyleSheet.create({
      pirate:{
        width: '100%',
        height:'100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',        
      },
      Notfound:{
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
      pagError:{
        width: '100%',
        height:'0%',
        marginVertical: 100,     
      },
      separator: {
        marginVertical: 4,     
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
      h2:{
        fontFamily: 'sans-serif-light',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        fontSize: 20,
      },
      imgPersonaje:{
        width: '100%',
        height: '40%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',        
        alignItems: 'center',
        textAlign: 'center',          
      },
    })
    

 
    