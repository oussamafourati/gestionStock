const mysql = require("mysql2");

var db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "stock_app",
});

db.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connected!:)");
  }
});

module.exports = db;
