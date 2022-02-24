// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbzNzwRKrSmO65oRFci2vk7K-K5VlckJw",
  authDomain: "eatron-auth.firebaseapp.com",
  projectId: "eatron-auth",
  storageBucket: "eatron-auth.appspot.com",
  messagingSenderId: "1046314013438",
  appId: "1:1046314013438:web:bcaff8385b64990b494baf"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const auth = firebase.auth();
const db = firebase.firestore();
export {auth,db};