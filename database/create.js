const config = require('../config/');
const mysql = require('mysql2/promise');

mysql.createConnection({
  user: config.sequelize.username,
  password: config.sequelize.password
}).then((connection) => {
  connection.query(`CREATE DATABASE IF NOT EXISTS ${config.sequelize.dbName};`);
}).then(() => {
  console.log(`database ${config.sequelize.dbName} successfully created!`);
  process.exit(0);
}).catch((err) => {
  console.log('error creating database...', err);
});