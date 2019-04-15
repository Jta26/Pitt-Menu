import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

import uuid from 'uuid';

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
          this.storage = app.storage();
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
      StoreItemImageFromFile = async (itemID, file, callback) => {
        if (file.type != '.jpg' || file.type != '.png') {
            callback('400', 'File must be either JPG or PNG.');
            return;
        }
        if (file.size > 10000) {
            callback('400', 'File must be less than 10 megabytes.');
            return;
        }
        let storageRef = this.storage.ref();
        let imgName = uuid() + file.type;
        let imgStorageRef = storageRef.child(imgName);
        await imgStorageRef.put(file);
        console.log(imgName + ' Stored');
        let imagesDBRef = this.database.ref(`/items/${itemID}/images`);
        let imgurl = await imgStorageRef.getDownloadURL();
        console.log(imgurl);
        imagesDBRef.push(imgurl);
        callback('200')
      }
      GetItemData = (itemID, callback) => {
        
        this.database.ref(`/items/${itemID}`).on('value', snapshot => {
            var itemData = snapshot.val();
            var dataReturn = {};
            try {
                dataReturn.name = itemData.name;
                dataReturn.desc = itemData.desc;
                dataReturn.images = [];
                dataReturn.comments = [];
                var imgSnapshot = snapshot.child('images');
                var commentSnapshot = snapshot.child('comments');
                imgSnapshot.forEach(img => {
                    dataReturn.images.push(img.val());
                });
                commentSnapshot.forEach(comment => {
                    dataReturn.comments.push(comment.val());
                });
            }
            catch(err) {
                console.log("ERROR" + err);
            }
            console.log(dataReturn);
            callback(dataReturn)
          
        });
      }
      




      //Database
  }

  export default Firebase;