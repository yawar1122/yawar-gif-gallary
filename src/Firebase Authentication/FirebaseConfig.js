// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyD80M2ygNo2P-oOVucxP5UiG6mF5tbr62M",
  authDomain: "gif-app-1b85d.firebaseapp.com",
  projectId: "gif-app-1b85d",
  storageBucket: "gif-app-1b85d.appspot.com",
  messagingSenderId: "291315934717",
  appId: "1:291315934717:web:7a3a470d3276fd46ba2594"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


export default app;