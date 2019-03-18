import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  };

  class Firebase {
      constructor() {
          app.initializeApp(config);
          this.auth = app.auth();
          this.database = app.database();
      }

      //Authentication
      CreateUserWithEmailandPassword = (email, password) => {
          return this.auth.createUserWithEmailAndPassword(email, password);
      }
      SignInWithEmailandPassword = (email, password) => {
          return this.auth.signInWithEmailAndPassword(email, password);
      }
      SignOut = () => {
          console.log('signing User out');
          this.auth.signOut();
      }
      




      //Database
  }

  export default Firebase;