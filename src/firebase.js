import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";

const settings = { timestampsInSnapshots: true };

var config = {
	apiKey: "AIzaSyAQjnsFc1QRuxCZQTb80rxormYFTyM5LpE",
	authDomain: "react-slack-clone-29627.firebaseapp.com",
	databaseURL: "https://react-slack-clone-29627.firebaseio.com",
	projectId: "react-slack-clone-29627",
	storageBucket: "react-slack-clone-29627.appspot.com",
	messagingSenderId: "568199227525",
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);
export default firebase;
export const database = firebase.database();
export const firestore = firebase.firestore();
export const auth = firebase.auth();
