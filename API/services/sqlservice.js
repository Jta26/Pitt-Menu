var mysql = require('mysql');
require('dotenv').config();
//Initialize the Connection object.
var connection = mysql.createConnection({
    host: process.env.DBCONN,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: 'menu_parser_db'
});
//Connect to the database.
connection.connect(function(err) {
    if (err) {
        throw err;
    }
    console.log('Database Connected Successfully');
});
//Takes in a menu date and type, and returns the results of the query to a callback function.
function GetMenuItems(date, type) {
    return new Promise((res, rej) => {
        sql = 'CALL GetMenu(?)' 
        param = [
            date,
            type
        ]
        connection.query(sql, [param], function(err, result) {
            if (err) throw err;
            if (result[0].length == 0) {
                rej(0);
            }
            console.log(`Retrieved Menu for ${type} on ${date}`);
            var items = [];
            result[0].forEach((item, i, arr) => {
                items.push(item['Item Name']);
                if (i === arr.length - 1) {
                    res(items);
                }
            });    
        })
    })
}

//Gets all the Items in the database.
function GetItems() {
    console.log('retrieving all Items from Database');
    return new Promise((res, rej) => {
        sql = 'SELECT * FROM Item';
        connection.query(sql, (err, result) => {
            if (err) rej(err);
            res(result);
        });
    })
}
//Retireves The ItemID and ItemName from Database by Item Name.
//Used if you know the ItemName, but not the ID.
function GetItemDataByItemName(itemName) {
    return new Promise((res, rej) => {
        sql = 'SELECT * FROM Item WHERE ItemName=?';
        connection.query(sql, [itemName], (err, result) => { 
            if (err) rej(err);
            var id = result[0].ItemID
            GetMenuDatesThatContainItemName(itemName).then((dates) => {
                res({
                    "itemID": id,
                    "itemName": itemName,
                    "dates": dates
                });
            })
            
        });
    });
}

function GetItemByItemID(ItemID) {
    return new Promise((res, rej) => {
        sql = 'SELECT * FROM Item WHERE ItemID=?';
        connection.query(sql, [ItemID], (err, result) => { 
            if (err) rej(err);
            res(result);
        });
    });
}

function GetMenuDatesThatContainItemName(itemName) {
    return new Promise((res, rej) => {  
        var sql = `SELECT m.MenuDate AS 'date', m.MenuType AS 'type' FROM Menu m JOIN MenuItem mi ON m.MenuID = mi.MenuID JOIN Item i ON i.ItemID = mi.ItemID WHERE i.ItemName = ?;`
        connection.query(sql, [itemName], (err, result) => {
            if (err) throw err;
            res(result);
        })

    })
}


//Exports
module.exports.GetMenuItems = GetMenuItems;
module.exports.GetItems = GetItems;
module.exports.GetItemDataByItemName = GetItemDataByItemName;
module.exports.GetItemByItemID = GetItemByItemID;
module.exports.GetMenuDatesThatContainItemName = GetMenuDatesThatContainItemName;

