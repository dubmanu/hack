'use strict';

require('dotenv').config();
// get the client
const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

console.log('conexion establecida');
// simple query
const query = `SELECT id, title, content, created_at, updated_at
FROM notes 
WHERE deleted_at IS NULL
ORDER BY created_at`;
function tratarResultadoQuery(err, results) {
  if (err) {
    console.error('ERROR!!!! :(', err);
    process.exit(-1);
  }

  console.log(results); // results contains rows returned by server
  
  connection.close();
}
connection.query(query, tratarResultadoQuery);
