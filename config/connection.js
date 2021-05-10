const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: PORT,
    user: db_process.env.DB_USER,
    password: db_process.env.DB_PASSWORD,
    database: db_process.env.DB_NAME,
  });