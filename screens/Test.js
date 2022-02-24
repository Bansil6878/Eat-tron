import { Image, StyleSheet, Text,TouchableOpacity,View } from 'react-native'
import React from 'react'
import Icon from 'react-native-elements';


const Test = ({route,navigation}) => {
   
    const {item} = route.params;

  return (
    <View>
      <Image source={item.img}  style={{height:290,width:'100%',resizeMode: 'center',borderRadius:200}} />

      <View
        style={{
          backgroundColor: 'lightgreen',
          height: '100%',
          borderRadius: 60,
        }}>
        <View style={{marginHorizontal: 20}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 60,
              color: 'black',
              marginVertical: 10,
            }}>
            {item.title}
          </Text>
          <Text style={{marginVertical: 10, fontSize: 16}}>{item.dec}</Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', marginVertical: 10}}>
              {item.mrp}
            </Text>
            <Text
              style={{color: 'black', marginBottom: 10, fontWeight: 'bold'}}>
              <Icon name="star" size={20} color="black" />
              {item.rating}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Addtocart', {item: item});
            }}
            style={{
              marginTop: 20,
              backgroundColor: '#5e92eb',
              justifyContent: 'center',
              alignItems: 'center',
              height: 30,
              borderRadius: 20,
            }}>
            <Text style={{color: '#dcdee6'}}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default Test

const styles = StyleSheet.create({})