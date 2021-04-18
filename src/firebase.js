import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
  // Your web app's Firebase configuration
  apiKey: "AIzaSyDeYA6tysNcuKtb6otUm-nq7oVX7sVJcvg",
  authDomain: "react-contact-form-6fd97.firebaseapp.com",
  projectId: "react-contact-form-6fd97",
  storageBucket: "react-contact-form-6fd97.appspot.com",
  messagingSenderId: "214797870134",
  appId: "1:214797870134:web:1231af82039215ee962497"
})

var db = firebaseApp.firestore();

export { db };
