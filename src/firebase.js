// firebase.js
import firebase from 'firebase';

// Initialize Firebase
// USE YOUR CONFIG OBJECT
const firebaseConfig = {
  apiKey: "AIzaSyB7ID-56ClOUnFDrLYFhh0ER5-JKLwi7iI",
  authDomain: "workout-log-demo.firebaseapp.com",
  databaseURL: "https://workout-log-demo.firebaseio.com",
  projectId: "workout-log-demo",
  storageBucket: "workout-log-demo.appspot.com",
  messagingSenderId: "1045295415038",
  appId: "1:1045295415038:web:a96565a5ec3c16c57bafaf"
};

firebase.initializeApp(firebaseConfig);

// this exports the CONFIGURED version of firebase
export default firebase;