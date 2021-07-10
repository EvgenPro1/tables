import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDhNHujaV5U2DONFDgVQSm8tp9lGm5xzXg",
    authDomain: "ixwood.firebaseapp.com",
    databaseURL: "https://ixwood-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ixwood",
    storageBucket: "ixwood.appspot.com",
    messagingSenderId: "1093778709620",
    appId: "1:1093778709620:web:e4e077c44b0d27ad418521",
    measurementId: "G-W2QEB5PYJQ"
};



export const fire = firebase.initializeApp(firebaseConfig)

/*
// Allow read/write access to all users under any conditions
// Warning: **NEVER** use this rule set in production; it allows
// anyone to overwrite your entire database.
service cloud.firestore {
    match /databases/{database}/documents {
    match /{document=**} {
        allow read, write: if true;
    }
}
}*/