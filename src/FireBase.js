
import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyD5clhHMtnEl0oJRL_j8b_jCQt-M4WtEVE",
    authDomain: "motion-f1201.firebaseapp.com",
    projectId: "motion-f1201",
    storageBucket: "motion-f1201.appspot.com",
    messagingSenderId: "728922638294",
    appId: "1:728922638294:web:e76e64ee5e46813ba10677"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};