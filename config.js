import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyA6DUs5-prYuac-tla8ocKf6B9wvoNZAu0",
    authDomain: "complaint-forum-b70e1.firebaseapp.com",
    projectId: "complaint-forum-b70e1",
    storageBucket: "complaint-forum-b70e1.appspot.com",
    messagingSenderId: "1071359425419",
    appId: "1:1071359425419:web:28e5a31ce45cfa35a10d8e"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()