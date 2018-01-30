// Requires connection.js
const connection = require('./connection.js');

// Exports queries for use in burger.js
module.exports = {

  // Select All query
  selectAll: async function () {
    return new Promise((resolve, reject) => {
      let query = `SELECT * FROM burgers`;
      connection.query(query, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  },
  
  // Insert One query
  insertOne: async function (burger) {
    return new Promise((resolve, reject) => {
      let query = `INSERT INTO burgers (burger_name) VALUES (?)`;
      connection.query(query, burger, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  },

  // Update One query
  updateOne: async function (id) {
    return new Promise((resolve, reject) => {
      let query = `UPDATE burgers SET devoured = true WHERE id = ?`;
      connection.query(query, id, (err, res) => {
        if (err) reject(err);
        console.log("Burger updated");
        resolve(res);
      });
    });
  }
}