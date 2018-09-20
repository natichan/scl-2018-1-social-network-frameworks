import firebase from 'firebase'
// Initialize Firebase
 const config = {
    apiKey: "AIzaSyD-O18UUFp3xJIPqSPPnLwrj-R_k4LoDAU",
    authDomain: "redsocialreact-bf847.firebaseapp.com",
    databaseURL: "https://redsocialreact-bf847.firebaseio.com",
    projectId: "redsocialreact-bf847",
    storageBucket: "redsocialreact-bf847.appspot.com",
    messagingSenderId: "335447925232"
  };
  const fire = firebase.initializeApp(config);
  export default fire;