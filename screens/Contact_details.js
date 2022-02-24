import React,{useState} from 'react'
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import con from '../assets/img/contact.jpg'

// import  {collection,addDoc} from 'firebase/firestore'
// import {db} from '../firebase';

// const sendToFirestore = async() => {
//   await addDoc(collection(db, "MyCollection"), {
//     name: "John",
//     phone_num: "123456789",
//     address:'vdfvdfvdf',
//     city:'ahe',
//     pincode:'12345',
// } )}




export default function Contact_details({navigation}) {

  const [user , setUser] = useState({
        name:'',
        phone_num:'',
        address:'',
        city:'',
        pincode:''   
  });

  let name,value;
  const getUserData = () => {
        
      setUser({...user,[name]:value});

  }
  const sendToFirestore = async(e) => {
          e.prevendDefault();

          const {name,phone_num,address,city,pincode} = user;

        const res = await fetch('https://eatron-auth-default-rtdb.firebaseio.com/MyCollection.json',
          {
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
              name,
              phone_num,
              address,
              city,
              pincode

            })
          })
          if(res){
            setUser({
              name:'',
              phone_num:'',
              address:'',
              city:'',
              pincode:''   
        })

        Alert.alert("Data Added Success");
          }
        
        }

  return (
      <ImageBackground source={con} style={{width:'100%',height:'100%'}}>

    <View style={styles.Contact_main}>
        <Text style={{textTransform:'uppercase',marginVertical:10,fontSize:30,color:'rgba(251, 251, 251, 1)'}}>Add Your Details</Text>
     
      <TextInput 
      style={styles.input} 
      placeholder='Enter Your Name' 
      name='name'
      value={user.name}
      onChangeText={getUserData}
      />

      <TextInput 
      style={styles.input} 
      placeholder='Enter Your Phone No.'
      name='phone_num'
      value={user.phone_num}
      onChangeText={getUserData}
      keyboardType={'numeric'}
      />

      <TextInput 
      style={styles.input} 
      placeholder='Enter Your Address'
      name='address'
      value={user.address}
      onChangeText={getUserData}
      />

      <TextInput 
      style={styles.input} 
      placeholder='Enter Your City'
      name='city'
      value={user.city}
      onChangeText={getUserData}
      />


      <TextInput
       style={styles.input} 
       placeholder='Enter Your Pincode'
       name='pincode' 
       value={user.pincode}
       onChangeText={getUserData}
       keyboardType={'numeric'}
       />

      <TouchableOpacity style={styles.btn} onPress={sendToFirestore}>
          <Text style={styles.btn_text}>Submit</Text>
      </TouchableOpacity>

    </View>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
    Contact_main:{
        flex:1,
        alignItems:'center',
        marginVertical:60

    },
    input:{
        height:40,
        width:200,
        marginVertical:10,
        borderRadius:10,
        padding:10,
        backgroundColor:'#DBDBDB'
      },
      btn:{
        backgroundColor:'#09EC04',
        alignItems:'center',
        justifyContent:'center',
        height:40,
        width:100,
        padding:10,
        borderRadius:10,
        marginVertical:10
      },
      btn_text:{
        color:'rgba(251, 251, 251, 1)',
        fontWeight:'bold',
      }
})