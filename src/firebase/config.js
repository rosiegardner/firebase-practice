import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD4MeeA3j3Bv0z0tWjSyoGnUTRhxauqipk",
    authDomain: "fir-practice-59ff0.firebaseapp.com",
    projectId: "fir-practice-59ff0",
    storageBucket: "fir-practice-59ff0.appspot.com",
    messagingSenderId: "333419032801",
    appId: "1:333419032801:web:a1c6cb5d5d7852439ac7a0",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp }
