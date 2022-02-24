import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import main from '../assets/img/main.png';

// import { Ionicons } from '@expo/vector-icons';

  

export default function Forget() {
    const [email1, setEmail] = useState('');
    const [password1, setPassword] = useState('');
  return (
    <KeyboardAvoidingView style={{flex:1,backgroundColor:'rgba(255, 255, 255, 1)'}}>
    <ScrollView>

      <StatusBar/>
          <Image source={main} style={styles.main_img} />
        <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginHorizontal:10}}>
          
          <TouchableOpacity style={styles.social_btn}>
            <Ionicons style={styles.logo} name="logo-google" size={30} color="black" />
            <Text>Google</Text>
          </TouchableOpacity>
                <Text>Or</Text>
          <TouchableOpacity style={styles.social_btn}>
            <Ionicons style={styles.logo} name="logo-facebook" size={30} color="black" />
            <Text>Facebook</Text>
          </TouchableOpacity>

        </View>

        <View style={{alignItems:'center',marginTop:30}}>
          <TextInput 
           style={styles.input} 
           placeholder="Enter Your New Password"
           value={email1}
           onChangeText={(email) => setEmail(email)}              
          />
          <TextInput
           style={styles.input} 
           placeholder="confirm password"
           value={password1}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
            />
        
    
          <TouchableOpacity style={styles.btn} onPress={LoginUser}>
            <Text style={styles.btn_text}>Set Password</Text>
            </TouchableOpacity>

        </View>

</ScrollView>
  </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({

})