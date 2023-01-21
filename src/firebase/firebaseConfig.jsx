import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
  apiKey: "AIzaSyB6uOAAk1zA7WOVnwuw_owJNClqBmNYwVo",
  authDomain: "unquie-team.firebaseapp.com",
  databaseURL: "https://unquie-team-default-rtdb.firebaseio.com",
  projectId: "unquie-team",
  storageBucket: "unquie-team.appspot.com",
  messagingSenderId: "424150618354",
  appId: "1:424150618354:web:9186e8080e9798d047406b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}