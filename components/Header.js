import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import logo from '../assets/img/person.png'

export default function Header({navigation}) {
  return (
    <View style={styles.header_home}>
          
          <Text style={{color:'black',fontSize:15}}>Hello,{'\n'}<Text style={{fontWeight:'bold'}}>Krunal</Text></Text>  
          <View style={{flexDirection:'row',alignItems:'center'}}>
         
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
             <Image source={logo} style={styles.logo1}  />
          </TouchableOpacity>
         
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
    header_home: {
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:20
   },
   logo1:{
     borderRadius:20,
     
   },
})