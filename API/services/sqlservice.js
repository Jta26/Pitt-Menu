var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'menu-parser-db.cr6wut1qfi23.us-west-2.rds.amazonaws.com',
    user: 'admin',
    password: 'google951',
    database: 'menu_parser_db'
});
connection.connect(function(err) {
    if (err) {
        throw err;
    }
    console.log('Database Connected Successfully');
});
function GetMenu(date, type, callback) {
    sql = 'CALL GetMenu(?)' 
    param = [
        date,
        type
    ]
    connection.query(sql, [param], function(err, result) {
        if (err) throw err;
        callback(result);
    })
}
GetMenu('2019-02-02', true, function(res) {
    return res
});
module.exports = GetMenu;

