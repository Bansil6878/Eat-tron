import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect } from 'react'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import Voice from '@react-native-community/voice';

const Search = () => {

  const[result,setResult] = useState('');

        useEffect(() => {
            Voice.onSpeechStart = onSpeechStartHandler;
            Voice.onSpeechEnd = onSpeechEndHandler;
            Voice.onSpeechResults = onSpeechResultsHandler;

            return  () => {
                Voice.destroy().then(Voice.removeAllListeners);
            }

        }, []);




       const onSpeechStartHandler = (e) => {
          console.log('onSpeechStart',e);
        };
    
        const onSpeechEndHandler = (e) => {
          console.log('onSpeechEnd',e);
        };

        const onSpeechResultsHandler = (e) => {
         console.log('onSpeechResults', e);
        };





  return (
    <View style={styles.container}>
        <StatusBar barStyle='light-content'/>
        <Text style={styles.search_txt}>Search Any Thing From Here....</Text>

        <View style={styles.textInputStayle}>
            <TextInput 
            style={styles.search_input} 
            placeholder='Search Here'
            value={result}
            onChange={(text) => setResult(text)}
            />
            <Icon name='mic' size={30} color='black' />
        </View>
    </View>

  )
}

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        color:'black'
    },
    textInputStayle:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#e1e3e6',
        borderRadius:10,
        width:'90%',
        height:50,
        marginTop:20,
        padding:10,
        shadowOffset:{  width: 0,  height: 1 },
        shadowRadius:5,
        shadowColor:'black',
        shadowOpacity:0.5,
        elevation:2
    
    },
    search_txt:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        marginTop:20

    },
    search_input:{
        width:270,
        height:50,
    }

})