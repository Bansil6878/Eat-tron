import React from 'react'
import { Image,ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import bg from '../assets/img/login_img.png'
import main from '../assets/img/main.png'

import auth from '@react-native-firebase/auth'



export default function OtpPage({navigation}) {
  return (
    <ImageBackground source={bg} style={{width: '100%', height: '100%'}}>
        <View style={{justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'white'}}>
    

    <Image source={main} />
    <Text style={{color:'black',fontSize:20,fontWeight:'bold',textTransform:'uppercase'}}>Enter Your OTP Here</Text>

<View style={{
    flexDirection:'row',
    marginHorizontal:20
}}>
    <TextInput style={styles.input}/>
    <TextInput style={styles.input}/> 
    <TextInput style={styles.input}/> 
    <TextInput style={styles.input}/>
    <TextInput style={styles.input}/> 
    <TextInput style={styles.input}/> 
</View>

    
    <TouchableOpacity  style={{width:'60%'}} onPress={() => navigation.navigate('Home')}>
      <Text style={{ borderRadius:6,fontWeight:'bold',backgroundColor:'black',color:'#ebebeb',height:30,padding:6,textAlign:'center',marginVertical:30 }}>Next</Text>
    </TouchableOpacity>
  
        <TouchableOpacity>
          <Text style={{color:'#5e92eb',fontSize:15,textAlign:'center',marginVertical:6}}>Didn't get OTP?</Text>
        </TouchableOpacity>

      </View>
   </ImageBackground>
  )
}

const styles = StyleSheet.create({
    input:{
        borderColor:'#5e92eb',
        width:'10%',
        color:'black',
        borderWidth:1,
        margin:6,
        padding:6
        
    }
})