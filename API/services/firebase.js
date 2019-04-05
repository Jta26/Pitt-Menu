var sql = require('./sqlservice');
var fs = require('fs');
var firebase = require('firebase');

//This file handles functions that map 
// tenency of the items in the MySQL database 
// to the items in the firebase realtime database.

//DELETE EVENTUALLY
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
let database = admin.database();

//function that returns promise that gets the items from the database.
function GetFirebaseItemList() {
    return new Promise((res, rej) => {
        var itemsRef =  database.ref('/items/');
        var items = [];
        itemsRef.once('value').then((snapshot) => {
            snapshot.forEach((item) => {
                items.push([item.key, item.val()]);
                
            });
            res(items);
    
        })
    })
}
//This function gets the data for a single item in firebase.
async function GetFirebaseItem(itemID) {
   
    let itemRef = database.ref(`items/${itemID}/`);
    let item = await itemRef.once('value').then((snapshot) => {
        let itemData = {
            name: snapshot.val().name,
            desc: snapshot.val().desc,
            images: [],
            ratings: []
        }
        snapshot.child('/images').forEach((img) => {
            itemData.images.push(img.val());
        });
        snapshot.child('/ratings').forEach((rating) => {
            
            itemData.ratings.push(rating.val());
        });
        
        return itemData

    });
    return item

}
//This function stores and image into firebase storage from a buffer of bytes.
function StoreImageFromUInt8Arr(imgName, itemID, imgBuffer) {
    return new Promise(async (res, rej) => {
        var bucket = admin.storage().bucket();
        var file = bucket.file(imgName + '.jpg');
        await file.save(imgBuffer);
        await file.setMetadata({contentType: 'image/jpeg'}, function(err, apiResponse) {});
        
        var fileUrl = await file.getSignedUrl({
            action: 'read',
            expires: '03-17-2025'
        });
        console.log(`the Signed URL for ${imgName} is ${fileUrl[0]}`);
        CreateDatabaseReferenceLink(itemID, fileUrl[0]);
    });
}
//Creates a reference for firebase storage images in firebase realtime database.
function CreateDatabaseReferenceLink(itemID, link) {
    let ref = database.ref(`items/${itemID}/images`);
    ref.push(link);
    console.log('pushed');
}
//Sets a user's rating for a specific item.
function SetRating(itemID, userID, rating) {
    let ratingRef = database.ref(`/items/${itemID}/ratings/${userID}`);
    ratingRef.set(rating);
    console.log(`Item Rating for USER: ${userID} on ITEM: ${itemID} updated to ${rating}.`);
}
//Gets the rating for a specific user.
function GetUserRating(itemID, userID) {
    let userRatingRef = database.ref(`/items/${itemID}/ratings/${userID}`);
    return userRatingRef.once('value').then((rating) => {
        return rating.val();
    })
}
//Updates items in the SQL database to the firebase realtime database.
function updateFirebase() {
    sql.GetItems().then((items) => {
        items.forEach(item => {
            database.ref('/items/' + item.ItemID).update({
                name: item.ItemName
            });
        });
        
    });
}





module.exports.GetFirebaseItemList = GetFirebaseItemList;
module.exports.GetFirebaseitem = GetFirebaseItem;
module.exports.SetRating = SetRating;
module.exports.GetUserRating = GetUserRating;
module.exports.StoreImageFromUInt8Arr = StoreImageFromUInt8Arr;
module.exports.updateFirebase = updateFirebase;