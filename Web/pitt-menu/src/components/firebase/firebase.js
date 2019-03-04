import app from 'firebase/app';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyDpBoyI13RY9mHU2C1cOSyAC_tfr3-hu5U",
    authDomain: "menu-parser-7ba02.firebaseapp.com",
    databaseURL: "https://menu-parser-7ba02.firebaseio.com",
    projectId: "menu-parser-7ba02",
    storageBucket: "menu-parser-7ba02.appspot.com",
    messagingSenderId: "1027964664238"

}

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }
    //Authentication Functions
    CreateUser = (email, password) => {
        this.auth.createUserWithEmailAndPassword(email, password);
    }
    SignIn = (email, password) => {
        this.auth.signInWithEmailAndPassword(email, password);
    }
    SignOut = () => {
        this.auth.signOut();
    }
    ResetPassword = (email) => {
        this.auth.sendPasswordResetEmail(email);
    }
    UpdatePassword = (password) => {
        this.auth.currentUser.updatePassword(password);
    }
}

export default Firebase;