const mysql = require("mysql2");

const db = require("../config/db.config");

//@route POST /arrivage/newArrivage
//@desc  Create a new arrivage
exports.createArrivage = async (req, res) => {
  const sql =
    "INSERT INTO arrivage(`designation`, `montantTotal`, `fournisseurID`, `dateArrivage`) VALUES (?)";

  designation = req.body.designation;
  montantTotal = req.body.montantTotal;
  fournisseurID = req.body.fournisseurID;
  dateArrivage = req.body.dateArrivage;

  const values = [designation, montantTotal, fournisseurID, dateArrivage];

  db.query(sql, [values], (err, data) => {
    if (err) return res.send(err);
    return res.status(201).send(data);
  });
};
