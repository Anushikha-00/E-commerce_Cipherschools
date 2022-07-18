
import firebase from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCm-hi6iy6yLJVr43WdKblehbQLCZdUALo",
    authDomain: "clone-58669.firebaseapp.com",
    projectId: "clone-58669",
    storageBucket: "clone-58669.appspot.com",
    messagingSenderId: "675429046152",
    appId: "1:675429046152:web:2c95cff1e51d4a4d3d4c3d",
    measurementId: "G-Q4N2QP3G8T"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };