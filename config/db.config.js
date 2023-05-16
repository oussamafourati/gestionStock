const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "09979004",
  database: "stock_app"
});

db.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connected!:)");
  }
});

module.exports = db;
