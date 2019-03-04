import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDpBoyI13RY9mHU2C1cOSyAC_tfr3-hu5U",
    authDomain: "menu-parser-7ba02.firebaseapp.com",
    databaseURL: "https://menu-parser-7ba02.firebaseio.com",
    projectId: "menu-parser-7ba02",
    storageBucket: "menu-parser-7ba02.appspot.com",
    messagingSenderId: "1027964664238"
  };
var fire = firebase.initializeApp(config);

export default fire;