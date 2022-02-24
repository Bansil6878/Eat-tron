import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import categories from '../assets/data/Categories';


const DisplayCategories = ({item}) => {
    return(
      <>
      <TouchableOpacity > 
        <View style={styles.Cat} >
          <Image source={item.Img} style={styles.cat_img} />
          <Text style={styles.cat_title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
      </>
    )
  }




export default function Categories() {
  return (
    <View style={styles.categories_main}>
          <Text style={{color:'black',fontWeight:'bold',fontSize:20,marginHorizontal:20}}>categories</Text>
          <View style={styles.listcatWrapper}>

          <FlatList 
            data={categories}
            renderItem={DisplayCategories}
            keyExtractor={(item) => item.id}
            horizontal
            />

         </View>
      </View>
  )
}

const styles = StyleSheet.create({
  categories_main:{
    marginTop:30,
    height:160,
    width:'100%',
    marginBottom:10
    
    
  },
  listcatWrapper:{
    paddingTop:15, 
    paddingBottom:20,
    
 
  },
  Cat:{
    marginHorizontal:10,
    marginVertical:10,
    padding:20,
    flexDirection:'column',
    backgroundColor:'green',
     borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    width:90
    
  },
 
  cat_img:{
   resizeMode: 'cover',
   width: 30,
   height: 30,

  },
  cat_title:{
     color:'#deddd9'
  },
})