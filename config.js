import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDkZkIOl-HCJAOmv2K3kjvOhg5A2j1c3w8",
  authDomain: "swasthbharath-fdd30.firebaseapp.com",
  projectId: "swasthbharath-fdd30",
  storageBucket: "swasthbharath-fdd30.appspot.com",
  messagingSenderId: "181527158443",
  appId: "1:181527158443:web:384004ecfb1df25d5da1ee"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
