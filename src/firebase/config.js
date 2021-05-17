import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCtknIeTEGhozg2xz8eT7tSDYFImMGPe4U",
    authDomain: "gallery-7108c.firebaseapp.com",
    projectId: "gallery-7108c",
    storageBucket: "gallery-7108c.appspot.com",
    messagingSenderId: "513483416068",
    appId: "1:513483416068:web:9413c47215917c46ac8b51"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore(); 
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};