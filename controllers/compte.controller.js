const mysql = require("mysql2");
const db = require("../config/db.config");

const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

(exports.getUserByUsername = (username, callBack) => {
  db.query(
    `select * from comptes where username = ?`,
    [username],
    (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results[0]);
    }
  );
}),
  (exports.createUser = (req, res) => {
    const sql =
      "INSERT INTO comptes(`username`, `password`, `role`) VALUES (?)";

    username = req.body.username;
    password = req.body.password;
    role = req.body.role;

    const salt = genSaltSync(10);
    password = hashSync(password, salt);

    const values = [username, password, role];

    db.query(sql, [values], (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  });

exports.login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  this.getUserByUsername(username, (err, results) => {
    if (err) {
      console.log(err);
    }
    if (!results) {
      return res.json({
        success: false,
        data: "Invalid username or password",
      });
    }
    const result = compareSync(password, results.password);
    if (result) {
      results.password = undefined;
      const jsontoken = sign({ result: results }, "JWT SECRET", {
        expiresIn: "1h",
      });
      return res.json({
        success: true,
        message: "login successfully",
        token: jsontoken,
      });
    } else {
      return res.json({
        success: false,
        data: "Invalid username or password",
      });
    }
  });
};
