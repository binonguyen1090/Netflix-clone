// import Firebase from 'firebase/app';
import Firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import { seedDatabase } from '../seed';

// we need to somehow seed the database
// we need a config here
const config = {
    apiKey: "AIzaSyCSb0tIbGNlYRqnpl4eJZrkIIG6Id5Sc8c",
    authDomain: "netflix-21f1a.firebaseapp.com",
    projectId: "netflix-21f1a",
    storageBucket: "netflix-21f1a.appspot.com",
    messagingSenderId: "25314928621",
    appId: "1:25314928621:web:8ca5f9537c9b1a085029e4"
}; 

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase)

export { firebase };