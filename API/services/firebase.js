var sql = require('./sqlservice');
var firebase = require('firebase');
var app = firebase.initializeApp({
    apiKey: "AIzaSyDpBoyI13RY9mHU2C1cOSyAC_tfr3-hu5U",
    authDomain: "menu-parser-7ba02.firebaseapp.com",
    databaseURL: "https://menu-parser-7ba02.firebaseio.com",
    projectId: "menu-parser-7ba02",
    storageBucket: "menu-parser-7ba02.appspot.com",
    messagingSenderId: "1027964664238"
  });
console.log('firebase initialized');

//This file handles functions that map 
// tenency of the items in the MySQL database 
// to the items in the firebase realtime database.


function updateFirebase() {
    sql.GetItems().then((items) => {
        var database = firebase.database();
       
        items.forEach(item => {
            database.ref('/items/' + item.ItemID).set({
                name: item.ItemName
            });
        });
        
    });
}






module.exports.updateFirebase = updateFirebase;