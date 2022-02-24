import {Button, View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import { Icon } from 'react-native-elements';

export default function Details({route, navigation}) {
  const {item} = route.params;

  return (
    <View>

      <View style={styles.back_btn}>
          <Icon name='chevron-left' size={40} color="black"  onPress={() => navigation.navigate('Home')}/>
      </View>
      <Image
        source={item.img}
        style={styles.Main_img}
      />
      <View style={styles.main_wrapper}>
        <View style={{marginHorizontal: 20}}>
          <Text
            style={styles.title}>
            {item.title}
          </Text>
          <Text style={styles.desc_details}>{item.dec}</Text>

          <View
            style={styles.price_rating_wrapper}>
            <Text
              style={styles.price}>
              {item.mrp}
            </Text>
            <Text
              style={styles.rating}>
              <Icon name="star" size={20} color="black" />
              {item.rating}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Addtocart', {item: item});
            }}
            style={styles.addtocart}>
            <Text style={styles.addtocart_txt}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    btn:{
        color:'black',
        width:60,
        backgroundColor:'#5e92eb',
        alignItems:'center',
        justifyContent:'center',
        height:30,
        borderRadius:20,

    },
    Main_img:{
      height: 290,
          width: '100%',
          resizeMode: 'center',
          borderRadius: 200,
    },
    main_wrapper:{
      backgroundColor: 'lightgreen',
          height: '100%',
          borderRadius: 60,
    },
    title:{
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 60,
      color: 'black',
      marginVertical: 10,
    },
    desc_details:{
      marginVertical: 10, 
      fontSize: 16,
      color: 'black',
    },
   price_rating_wrapper :{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
      alignItems: 'center',
    },
    price:{
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 10,
      color: 'black',
    },
    rating:{
      color: 'black',
      marginBottom: 10, 
      fontWeight: 'bold',
      alignItems:'center'
    },
    addtocart:{
      marginTop: 20,
      backgroundColor: '#5e92eb',
      justifyContent: 'center',
      alignItems: 'center',   
      height: 30,
      borderRadius: 20,
    },
    addtocart_txt:{
      color:'#fff',
      fontWeight:'bold'
    },
    back_btn:{
      alignItems:'flex-start',
      justifyContent:'flex-start',
      marginHorizontal:20,
      marginVertical:10,

    }
  
  
  
  
  });
