const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: PORT,
    user: 'root',
    password: 'root',
    database: 'expensetracker_db',
  });