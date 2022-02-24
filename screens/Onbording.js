import React,{useEffect, useState} from 'react';
import { View, Text, Image, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';

import on_img from '../assets/img/main.png'

import PushNotification from "react-native-push-notification";




export default function Onbording({navigation}) {

    
  useEffect(()=>{
    createChannel();
 },[])

    const createChannel = () =>{
        PushNotification.createChannel(
          {
            channelId:'myChannel',
            channelName:'My Channel',
          }
        )
      }

    return (
    <View style={styles.main}>
        <StatusBar />
      <Image source={on_img}  size={100}/>
      <Text style={styles.main_heading}>Top #1 Fastest</Text>
      <Text style={styles.main_heading}>Delivery Food For You</Text>

      <Text style={{color:'black',paddingHorizontal:30,paddingVertical:27,textAlign:'center'}}>Order Your Favorite Food And Get Delivered In Fastest Time In The Town</Text>
      
     <TouchableOpacity>
         <Text style={styles.btn} 
         
         onPress={() => navigation.navigate('Login')}

         >Get Started</Text>
     </TouchableOpacity>
    </View>
  );
   
}

const styles = StyleSheet.create({

    main: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    main_heading:{
        fontSize:24,
        fontWeight:'bold',
        color:'#5e92eb',
        
    },
    btn:{
        backgroundColor:'green',
        color:'white',
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        width:175,
        height:44,
        borderRadius:20,
        fontSize:16
    }
}
)