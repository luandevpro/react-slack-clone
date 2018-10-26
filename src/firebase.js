import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/store";

var config = {
	apiKey: "AIzaSyAQjnsFc1QRuxCZQTb80rxormYFTyM5LpE",
	authDomain: "react-slack-clone-29627.firebaseapp.com",
	databaseURL: "https://react-slack-clone-29627.firebaseio.com",
	projectId: "react-slack-clone-29627",
	storageBucket: "react-slack-clone-29627.appspot.com",
	messagingSenderId: "568199227525",
};
firebase.initializeApp(config);
