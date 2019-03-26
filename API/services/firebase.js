var sql = require('./sqlservice');
var fs = require('fs');
var firebase = require('firebase');
var app = firebase.initializeApp({
    apiKey: "AIzaSyDpBoyI13RY9mHU2C1cOSyAC_tfr3-hu5U",
    authDomain: "menu-parser-7ba02.firebaseapp.com",
    databaseURL: "https://menu-parser-7ba02.firebaseio.com",
    databaseAuthVariableOverride: {
        uid: "node-api"
    },
    projectId: "menu-parser-7ba02",
    storageBucket: "menu-parser-7ba02.appspot.com",
    messagingSenderId: "1027964664238"
  });
var admin = require('firebase-admin');
var serviceAccount = require('../menu-parser-service-account.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://menu-parser-7ba02.firebaseio.com",
    storageBucket: "menu-parser-7ba02.appspot.com"
});
console.log('firebase initialized');

//This file handles functions that map 
// tenency of the items in the MySQL database 
// to the items in the firebase realtime database.


//function that returns promise that gets the items from the database.
function GetFirebaseItemList() {
    return new Promise((res, rej) => {
        var database = firebase.database();
        var itemsRef =  database.ref('/items/');
        var items = [];
        itemsRef.once('value').then((snapshot) => {
            snapshot.forEach((item) => {
                items.push(item.val());
            });
            res(items);
    
        })
    })

}
function StoreImageFromUInt8Arr(imgName, imgBuffer) {
    return new Promise( async (res, rej) => {
        var bucket = admin.storage().bucket();
        var file = bucket.file(imgName + '.jpg');
        file.save(imgBuffer);
    })
}
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





module.exports.GetFirebaseItemList = GetFirebaseItemList;
module.exports.StoreImageFromUInt8Arr = StoreImageFromUInt8Arr;
module.exports.updateFirebase = updateFirebase;