import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Custom Components
import Home from './screens/Home'
import Onbording from './screens/Onbording';
import Login from './screens/Login';
import Details from './screens/Details';
import Profiles from './screens/Profile';
import Addtocart from './screens/Addtocart';
import Contact_details from './screens/Contact_details';
import Forget from './screens/Forget';
import OtpPage from './screens/OtpPage'
import Test from './screens/Test'
import Search from './screens/Search'


const Stack = createNativeStackNavigator();

export default function App() {
  

  return (
       <NavigationContainer>
        <Stack.Navigator>
          
          <Stack.Screen name="Onbording" component={Onbording} options={{headerShown:!true}} />
          <Stack.Screen name="Login" component={Login} options={{headerShown:!true}} />
          <Stack.Screen name="OtpPage" component={OtpPage} options={{headerShown:!true}} />
          <Stack.Screen name="Home" component={Home} options={{headerShown:!true}} />
          <Stack.Screen name="Details" component={Details}  options={{headerTintColor:'black',headerShown:!true}} />
          <Stack.Screen name="Addtocart" component={Addtocart}  />
          <Stack.Screen name="Profile" component={Profiles}  options={{headerShown:!true}} />
          <Stack.Screen name="Contact" component={Contact_details} options={{headerShown:!true}} />
          <Stack.Screen name="forget" component={Forget} options={{headerShown:!true}} />
          <Stack.Screen name="Test" component={Test} options={{headerShown:!true}} />
          <Stack.Screen name="Search" component={Search} options={{headerShown:!true}} />


  
        </Stack.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({})




// import React, { useState } from 'react';
// import { Button, TextInput } from 'react-native';
// import auth from '@react-native-firebase/auth';

// const App = () => {
//   // If null, no SMS has been sent
//   const [confirm, setConfirm] = useState(null);

//   const [code, setCode] = useState('');

//   // Handle the button press
//   async function signInWithPhoneNumber(phoneNumber) {
//     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//     setConfirm(confirmation);
//   }

//   async function confirmCode() {
//     try {
//       await confirm.confirm(code);
//     } catch (error) {
//       console.log('Invalid code.');
//     }
//   }

//   if (!confirm) {
//     return (
//       <Button
//         title="Phone Number Sign In"
//         onPress={() => signInWithPhoneNumber('+918758801029')}
//       />
//     );
//   }

//   return (
//     <>
//       <TextInput value={code} onChangeText={text => setCode(text)} />
//       <Button title="Confirm Code" onPress={() => confirmCode()} />
//     </>
//   );
// }

// export default  App;