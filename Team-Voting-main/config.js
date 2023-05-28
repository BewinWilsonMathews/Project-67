import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBiMDGcGQwwMU6U-9O8nXgA5G-PL9ivjB4",
  authDomain: "vote-app-46160.firebaseapp.com",
  projectId: "vote-app-46160",
  storageBucket: "vote-app-46160.appspot.com",
  messagingSenderId: "516623260561",
  appId: "1:516623260561:web:65083e19941747ef6b9830"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();