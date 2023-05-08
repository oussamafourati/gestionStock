const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");

var db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "stock_app",
});

module.exports = db;
