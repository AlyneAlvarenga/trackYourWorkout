// firebase.js
import firebase from 'firebase';

// Initialize Firebase
// USE YOUR CONFIG OBJECT
// const firebaseConfig = {
//   apiKey: "AIzaSyB7ID-56ClOUnFDrLYFhh0ER5-JKLwi7iI",
//   authDomain: "workout-log-demo.firebaseapp.com",
//   databaseURL: "https://workout-log-demo.firebaseio.com",
//   projectId: "workout-log-demo",
//   storageBucket: "workout-log-demo.appspot.com",
//   messagingSenderId: "1045295415038",
//   appId: "1:1045295415038:web:a96565a5ec3c16c57bafaf"
// };

var firebaseConfig = {
  apiKey: "AIzaSyBjslI-IoBdDGN9zYOMB5qWYgJn-suGrLM",
  authDomain: "what-d9a13.firebaseapp.com",
  databaseURL: "https://what-d9a13.firebaseio.com",
  projectId: "what-d9a13",
  storageBucket: "what-d9a13.appspot.com",
  messagingSenderId: "185658600980",
  appId: "1:185658600980:web:54b408a5a31508e8bd0101"
};

firebase.initializeApp(firebaseConfig);

// this exports the CONFIGURED version of firebase
export default firebase;