import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import logo from '../assets/img/person.png';

// custom components
import Categories from '../components/Categories';
import Slider from '../components/Slider';

//Data 
import bestseller from '../assets/data/Bestseller';
import { Icon } from 'react-native-elements';

const Home = ({navigation}) => {
  const DisplayDeals = ({item}) => {
    return (
      <>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Details', {
              item: item,
            })
          }>
          <View style={styles.deals_main}>
            <View
              style={{
                margin: 10,
                justifyContent: 'space-around',
              }}>
              <Text style={{color: 'black', fontSize: 20}}>{item.title}</Text>
              <Text style={{color: 'black', fontSize: 14}}>{item.des}</Text>
              <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
                {item.mrp}
              </Text>
            </View>

            <Image source={item.img} style={styles.deals_img} />
          </View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={{backgroundColor: '#EEEEEE'}}>
      <StatusBar />
      <ScrollView>
        
        {/* Header */}
        <View style={styles.header_home}>
          <Text style={{color: 'black', fontSize: 15}}>
            Hello,{'\n'}
            <Text style={{fontWeight: 'bold'}}>Krunal</Text>
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>

        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Icon name='search' size={26} color='black' style={{marginHorizontal:10}} />
        </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image source={logo} style={styles.logo1} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Slider */}
        <Slider />

        {/* categories */}
        <Categories />

        {/* Our List */}
        <View>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 20,
              marginHorizontal: 20,
              marginVertical: 10,
            }}>
            Our Best Seller
          </Text>
          <FlatList
            data={bestseller}
            renderItem={DisplayDeals}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header_home: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  logo1: {
    borderRadius: 20,
  },
  deals_img: {
    resizeMode: 'center',
    height: 70,
    width: 70,
    margin: 20,
  },
  deals_main: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    height: 120,
    width: '90%',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 0.5,
  },
});

export default Home;
