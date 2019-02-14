var mysql = require('mysql');

//Initialize the Connection object.
var connection = mysql.createConnection({
    host: 'menu-parser-db.cr6wut1qfi23.us-west-2.rds.amazonaws.com',
    user: 'admin',
    password: 'google951',
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
function GetMenu(date, type, callback) {
    sql = 'CALL GetMenu(?)' 
    param = [
        date,
        type
    ]
    connection.query(sql, [param], function(err, result) {
        if (err) throw err;
        console.log(`Retrieved Menu for ${type} on ${date}`);
        callback(result);
    })
}



//Exports
module.exports = GetMenu;

