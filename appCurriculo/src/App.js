

import React from 'react';
import  {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/foto.jpg';




const App = () => {
  function handleRedeSocial(redeSocial){
    switch(redeSocial){
      case 'linkedin':
        Alert.alert('Meu Linkedin','https://www.linkedin.com/in/flavianaomiandomizael/')
        break
      case 'github':
        Alert.alert('Meu GitHub','https://github.com/flanaomi/')
        break
      case 'instagram':
        Alert.alert('Meu Instagram','https://www.instagram.com/flavianaomi_/')
        break
      
    }
  }


   return (
    <>
     <View style={style.page}>
       <View style={style.containerCabecalho}>
         <Image source={foto} style={style.foto}/>
         <Text style={style.nome}>Flávia Naomi </Text>
         <Text style={style.funcao}> Desenvolvedora Front-End Mobile</Text>
         <View style={style.redesSociais}>
          <TouchableOpacity onPress={()=>handleRedeSocial('github')}> 
           <Icon name="github" size={30}/>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>handleRedeSocial('instagram')}>           
           <Icon name="instagram" size={30}/>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>handleRedeSocial('linkedin')}> 
           <Icon name="linkedin" size={30}/> 
           </TouchableOpacity>         
         </View>
       </View>
       <View style={style.cardContainer}>
       <View style={style.card}>
         <View style={style.cardHeader}>
           <Text>Experiencia Profissional

           </Text>
         </View>
         <View style={style.cardContent}>
           <Text style={style.cardContentText}>
               Desenvolvedora em andamento
           </Text>
           <Text style={style.cardContentText}>
             
           </Text>
        


         </View>
       </View>
       </View>

       <View style={style.cardContainer}>
       <View style={style.card}>
         <View style={style.cardHeader}>
           <Text>Formação Academica</Text>
         </View>
         <View style={style.cardContent}>
           <Text style={style.cardContentText}>
             Ceunsp - Fisioterapia - Não concluido  
           </Text>
           <Text style={style.cardContentText}>
             Claretiano - Bacharelado em Ed. Fisica - Não concluido  
           </Text>
           


         </View>
       </View>
       </View>

     </View>
    </>
  );
};

const style = StyleSheet.create ({

  page: {
    backgroundColor:'#FBEFEF',
    flex:1,
    
  },

  containerCabecalho:{
    marginTop:10,
    alignItems: 'center',
    justifyContent: 'center'   
  },

  foto: {
    width: 200,
    height: 200,
    borderRadius: 150,
  },
  nome: {
    fontSize:32,
    fontWeight: 'bold',
    marginTop:10
  },
  funcao: {
    color: '#939393',
    marginBottom:10,
    fontSize:20.
  },
  redesSociais: {
    flexDirection:'row',
    justifyContent:'space-between',
    width: '50%',
    marginTop: 20,
    alignItems: 'center'
  },
  cardContainer:{
    justifyContent:'center',
    width:'100%',
    alignItems: 'center',
    marginTop: 30,  
  },
  card:{
    width: '60%',
    borderRadius:5,
    borderWidth: 2,
    borderColor:'#939393'  , 
    alignItems: 'center' ,
    justifyContent: 'center',
    padding: 10,
    backgroundColor:'#F5A9A9',
  },
  cardContent:{
    marginTop: 20,

  },
  cardContentText:{
    color:'#2E2E2E',
    marginBottom: 10,
    fontWeight: 'bold',


  }
  
})




export default App;
