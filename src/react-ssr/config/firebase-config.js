import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyABDPSX59j229DMrZQ5MA-38ev22BHZ4GU",
    authDomain: "intense-fb808.firebaseapp.com",
    projectId: "intense-fb808",
    storageBucket: "intense-fb808.appspot.com",
    messagingSenderId: "299659010901",
    appId: "1:299659010901:web:7a7c67d6954888b69805dc"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;