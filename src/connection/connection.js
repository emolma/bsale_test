const mysql = require('mysql');
const dotenv = require('dotenv')
dotenv.config()
/*
const connection = mysql.createConnection({
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user: 'bsale_test',
    password: 'bsale_test',
    port: 22,
    database: 'bsale_test'
  });
*/

const connection = mysql.createPool({
  host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
  user: 'bsale_test',
  password: 'bsale_test',
  port: 22,
  database: 'bsale_test',
  acquireTimeout: 4
});

connection.getConnection((err) => {
    if(err){
        console.log('Error connecting to Db');
        console.log(err)
        return;
      }
      console.log('Connection established');
  });
/*
  connection.end((err) => {
    // The connection is terminated gracefully
    // Ensures all remaining queries are executed
    // Then sends a quit packet to the MySQL server.
  });
*/
module.exports = {
  connection,
};