import firebase from "firebase/compat/app";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyADu3WA0PrkVX1G269FG69e_hvku7D_Lis",
        authDomain: "line-clone-d8a58.firebaseapp.com",
        projectId: "line-clone-d8a58",
        storageBucket: "line-clone-d8a58.appspot.com",
        messagingSenderId: "399335782231",
        appId: "1:399335782231:web:3f5d0117f2a2d5e9f9b012"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };