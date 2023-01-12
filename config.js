import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCyVr4EaWdAr7ST3_LnqGtl_u2C1iQCu84",
    authDomain: "pro71-5a024.firebaseapp.com",
    projectId: "pro71-5a024",
    storageBucket: "pro71-5a024.appspot.com",
    messagingSenderId: "150735146657",
    appId: "1:150735146657:web:4042e5a20205c59db12ae0"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
