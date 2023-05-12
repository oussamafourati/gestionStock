const db = require("../config/db.config");

const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

exports.getUserByUsername = (username, callBack) => {
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
};

exports.createUser = (req, res) => {
  const sql = "INSERT INTO comptes(`username`, `password`, `role`) VALUES (?)";

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
};

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

exports.getAllUsers = async (req, res) => {
  const sql = "SELECT * FROM comptes";
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.status(201).send(data);
  });
};

exports.getUser = async (req, res) => {
  const compteId = req.params.id;
  const sql = "SELECT * FROM comptes WHERE idCompte = ? ";
  db.query(sql, [compteId], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.status(201).send(data);
  });
};

exports.updateUser = (req, res) => {
  const compteId = req.params.id;
  const sql =
    "UPDATE comptes SET `username`= ?, `password`= ?, `role`= ? WHERE idCompte = ?";

  const salt = genSaltSync(10);
  password = hashSync(req.body.password, salt);

  const values = [req.body.username, password, req.body.role];

  db.query(sql, [...values, compteId], (err, results) => {
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
};

exports.deleteUser = async (req, res) => {
  const compteId = req.params.id;
  const sql = " DELETE FROM comptes WHERE idCompte = ? ";

  db.query(sql, [compteId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
};
