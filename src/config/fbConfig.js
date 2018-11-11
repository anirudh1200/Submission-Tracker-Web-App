import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
// please enter your firebase details which will be provided after creating a new firebase project
  var config = {
    apiKey: "Your APIkey",
    authDomain: "your auth domain",
    databaseURL: "database url",
    projectId: "project id",
    storageBucket: "storage bucket",
    messagingSenderId: "messagin sender id"
  };

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
