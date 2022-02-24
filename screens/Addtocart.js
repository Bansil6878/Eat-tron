import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';

export default function Addtocart({route,navigation}) {

  const {item} = route.params;
  const [val, updateVal] = useState(1); 



  return (
    <>
    <View style={{flex: 1}}>
      
      <View style={{flexDirection:'row',backgroundColor:'#dee6dc',padding:20,justifyContent:'space-between',marginHorizontal:20,
    marginVertical:20,borderRadius:20}}>
        <Image source={item.img}  style={{height:100,width:100,resizeMode: 'center',borderRadius:200,alignItems:'center',justifyContent:'center'}} />
        
        <View>
          <Text style={{paddingVertical:6}}>{item.title}</Text>
          <Text>{item.des}</Text>
           <Text style={{paddingVertical:10}}>{`Product MRP IS :  ${item.mrp} `}</Text>

      <View style={styles.queContainer}>
         
         <TouchableOpacity
         style={styles.btn}
          onPress={() => {
           if(val>1){
             updateVal(val-1)
           }else{
             updateVal(1)
             alert("Value Is Zero")
           }
           
         }}>

         <Text style={{color:'#d1d1d1',fontWeight:'bold',fontSize:20}} >-</Text>

         </TouchableOpacity>
         
         <Text style={{backgroundColor:'#ebebeb',paddingHorizontal:10}}>{val}</Text>

         <TouchableOpacity  style={styles.btn} onPress={() => {
           if(val<10){
           updateVal(val+1)
           }else{
             updateVal(1)
             alert("Max Value Is 10")
           }
         }} >

         <Text style={{color:'#d1d1d1',fontWeight:'bold',fontSize:20}}>+</Text>
         </TouchableOpacity>
       </View>


        </View>
      </View>
      
     
      

          <View style={styles.bottom}>
            <Text style={{color:'#dcdee6',fontWeight:'bold'}}>{`Total value: ₹${val*399} `}</Text>
            <TouchableOpacity onPress={() => Alert.alert(`Your Order is Submitted \n Total Price Is ${val*399}`)}>
              <Text style={{color:'#dcdee6',fontWeight:'bold',fontSize:16,backgroundColor:'#4bd92b',paddingHorizontal:10,paddingVertical:6}}>MAKE PAYMENT </Text>
            </TouchableOpacity>
          </View>


    </View>
    </>
  );
}


const styles = StyleSheet.create({
  btn:{
      color:'black',
      height:30,
      width:30,
      backgroundColor:'#5e92eb',
      alignItems:'center',
      justifyContent:'space-between',
      borderRadius:20,
    
  },
  bottom:{
    backgroundColor:'#5576ed',
    color:'#dcdee6',
    height:60,
    justifyContent:'space-evenly',
    alignItems:'center',
    flexDirection:'row',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  
  },
  queContainer:{
    backgroundColor:'#5e92eb',
    flexDirection:'row',
    justifyContent:'center',
    marginBottom:10,
    alignItems:'center',
    width:100,
    borderRadius:20

  }
})