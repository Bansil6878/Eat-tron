import { StyleSheet, Text, View,TouchableOpacity ,Image, ImageBackground} from 'react-native'
import React from 'react'
// import {auth} from '../firebase'
import logo from '../assets/img/person.png'
import con from '../assets/img/contact.jpg'



export default function Profiles({navigation}) {

//   const user = auth.currentUser;

//   const logout = () => {
//     auth.signOut().then(() => {
//     navigation.replace('Login');
//   }).catch(error => alert(error.message));
  
// }
  
  return (
    <ImageBackground source={con} style={{width:'100%',height:'100%'}}>
    <View style={styles.container}>
      <Image source={logo} style={styles.Profile_img} />
      <Text style={styles.user_email}>Email :</Text>
      <Text style={styles.warning}>You Didn't Add Your Details. Complete This </Text>
      <TouchableOpacity style={styles.details_btn}>
        <Text style={styles.detalis_text}>Add Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logout_btn}>
        <Text style={styles.logout_text}>Logout</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Profile_img:{
    width:100,
    height:100,
    borderRadius:10,
    marginHorizontal:10
  },
  user_email:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:10
  },
  logout_btn:{
    backgroundColor:'blue',
    padding:10,
    marginTop:10,
    borderRadius:10,
    width:100,
    alignItems:'center',
    justifyContent:'center'
  },
  logout_text:{
    color:'#d1d1d1',
    fontWeight:'bold',
    alignItems:'center',
    justifyContent:'center'

  },
  details_btn:{
    backgroundColor:'yellow',
    padding:10,
    marginTop:10,
    borderRadius:10,
    width:100,
    alignItems:'center',
    justifyContent:'center'
  }
  ,
detalis_text:{
  color:'#0d0b0b',
    fontWeight:'bold',
    alignItems:'center',
    justifyContent:'center'
},
warning:{
  padding:6,
  backgroundColor:'yellow',
  borderRadius:10,
}
 
})