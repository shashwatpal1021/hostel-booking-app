import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBIUZ3ttxuPiSTpH-5x2Dbm_5qHD7xe-xY",
  authDomain: "hostel-booking-54121.firebaseapp.com",
  databaseURL: "https://hostel-booking-54121-default-rtdb.firebaseio.com",
  projectId: "hostel-booking-54121",
  storageBucket: "hostel-booking-54121.appspot.com",
  messagingSenderId: "1030612762337",
  appId: "1:1030612762337:web:a9cea8709dd27d995241a0"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));
