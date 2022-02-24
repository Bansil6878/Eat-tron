import { ImageBackground, StyleSheet, Text, TextInput, View,Image ,TouchableOpacity, Alert} from 'react-native'
import React ,{useEffect, useState} from 'react'

import bg from '../assets/img/login_img.png'

import main from '../assets/img/main.png'
import PushNotification from 'react-native-push-notification';


export default function Login({navigation}) {


  const[num ,setNum] = useState('+91');


  const getOtp = () =>{
      if(num && num.length> 9)
      {
        navigation.navigate('OtpPage',{num});
      }
      else{
        Alert.alert("Please Enter 10 Digit Number");
      }
  }

  const handleNotification = () => {
    PushNotification.localNotification({
      channelId: 'myChannel',
      title: 'Todays Offers',
      message: 'Get 60% Discount on your first order',
    })

    PushNotification.localNotificationSchedule({
        channelId: 'myChannel',
        title: 'Todays Offers',
        message: 'Get 60% Discount on your first order',
        date: new Date(Date.now() + (360 * 1000)),
        allowWhileIdle: true,
      })
  }



  return (
     <ImageBackground source={bg} style={{width: '100%', height: '100%'}}>
        <View style={{justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'white'}}>
    

    <Image source={main} />
    <Text style={{color:'black',fontSize:20,fontWeight:'bold',textTransform:'uppercase'}}>Enter Your Phone Number</Text>
    <TextInput 
      placeholder='Enter Your Phone Number'
      style={{borderColor:'#5e92eb',width:'60%',color:'black',borderWidth:1,borderRadius:10,padding:10,marginTop:20,marginHorizontal:20}}
      keyboardType='numeric'
      value={num}
      onChangeText={(text) => setNum(text)}
    /> 
    
    <TouchableOpacity style={{width:'60%'}} onPress={getOtp}>
      <Text style={{ borderRadius:6,backgroundColor:'black',color:'#ebebeb',height:30,padding:6,textAlign:'center',marginVertical:30 }}>Get OTP</Text>
    </TouchableOpacity>


    <TouchableOpacity style={{width:'60%'}} onPress={handleNotification}>
      <Text style={{ borderRadius:6,backgroundColor:'black',color:'#ebebeb',height:30,padding:6,textAlign:'center',marginVertical:30 }}>Get notification</Text>
    </TouchableOpacity>
 
      </View>
   </ImageBackground>
  )
}

const styles = StyleSheet.create({})