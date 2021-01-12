import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBCedPHFKgY7GHAaks3HCwtWUqj_4nQBJg",
	authDomain: "snapchat-clone-6c035.firebaseapp.com",
	projectId: "snapchat-clone-6c035",
	storageBucket: "snapchat-clone-6c035.appspot.com",
	messagingSenderId: "466841135372",
	appId: "1:466841135372:web:810b7b49fb99ce6e474129",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
