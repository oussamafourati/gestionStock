const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");

var db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "stock_app",
});

module.exports = db;
