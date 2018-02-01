// require mySql
const mysql = require('mysql');
// setting up connection
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'S1l3nus!13',
    database: 'burgers_db'
  })
}

// establishing connection
connection.connect(function (err) {
  if (err) {
    console.error('Connection error: ' + err.stack);
  };
  console.log('Connection id: ' + connection.threadId);
  return;
});
// export connection
module.exports = connection;