const mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'S1l3nus!13',
        database : 'burgers_db'
    });
}

module.exports = connection;

