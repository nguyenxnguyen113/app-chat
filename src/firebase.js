import * as firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDRBaSn8LutuILeObFdTJ_vnSbY7kAX0V0",
    authDomain: "mindx-web41.firebaseapp.com",
    databaseURL: "https://mindx-web41.firebaseio.com",
    projectId: "mindx-web41",
    storageBucket: "mindx-web41.appspot.com",
    messagingSenderId: "154528470545",
    appId: "1:154528470545:web:ac07f7805c81c666fc83b0"
};

firebase.initializeApp(firebaseConfig)

export const firebaseAuth = firebase.auth();

export const firebaseDb = firebase.firestore()