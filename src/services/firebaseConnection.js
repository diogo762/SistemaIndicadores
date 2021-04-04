import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "AIzaSyCCfT2s8jSgt6dxLy4Vi6jvAgT_82K_ijM",
    authDomain: "indicador-cc735.firebaseapp.com",
    projectId: "indicador-cc735",
    storageBucket: "indicador-cc735.appspot.com",
    messagingSenderId: "762361887516",
    appId: "1:762361887516:web:51dc4e96dc716c569dd8d9",
    measurementId: "G-DKG7D85L5Y"
  };
  // Initialize Firebase

  if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);

  }

  export default firebase;

