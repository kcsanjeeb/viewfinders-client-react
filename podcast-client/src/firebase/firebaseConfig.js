import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyBej1piViJrfZjMQBggOGb_Q3CZLZfroRg",
    authDomain: "viewfinders-podcast-fe434.firebaseapp.com",
    projectId: "viewfinders-podcast-fe434",
    storageBucket: "viewfinders-podcast-fe434.appspot.com",
    messagingSenderId: "678715200273",
    appId: "1:678715200273:web:7455d644f4c0ab664d72b0",
    measurementId: "G-KTHL2XCGDE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true});

  const auth = firebase.auth()

  export {firebase, auth};