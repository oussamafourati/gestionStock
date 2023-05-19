const db = require("../config/db.config");

exports.createArrivage = async (req, res) => {
  const sql =
    "INSERT INTO arrivage(`designation`, `montantTotal`, `fournisseurID`, `dateArrivage`) VALUES (?);";

  designation = req.body.designation;
  montantTotal = req.body.montantTotal;
  fournisseurID = req.body.fournisseurID;
  dateArrivage = req.body.dateArrivage;

  const values = [designation, montantTotal, fournisseurID, dateArrivage];

  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection errror",
      });
    }
    return res.status(200).json(data);
  });
};

exports.getAllArrivage = async (req, res) => {
  const sql =
    "SELECT A.*, F.raison_sociale From arrivage as A INNER JOIN fournisseur as F ON A.fournisseurID = F.idfournisseur";
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection errror",
      });
    }
    return res.status(200).json(data);
  });
};

exports.getOneArrivage = async (req, res) => {
  const id_arrivage = req.params.id;
  const sql =
    "SELECT A.*, F.raison_sociale From arrivage as A INNER JOIN fournisseur as F ON A.fournisseurID = F.idfournisseur WHERE idArrivage  = ? ";
  db.query(sql, [id_arrivage], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection errror",
      });
    }
    return res.status(200).json(data);
  });
};

exports.updateArrivage = async (req, res) => {
  const id_arrivage = req.params.id;
  const sql =
    "UPDATE arrivage SET `designation`= ?, `montantTotal`= ?, `fournisseurID`= ?, `dateArrivage`= ? WHERE idArrivage = ?";

  designation = req.body.designation;
  montantTotal = req.body.montantTotal;
  fournisseurID = req.body.fournisseurID;
  dateArrivage = req.body.dateArrivage;

  const values = [designation, montantTotal, fournisseurID, dateArrivage];

  db.query(sql, [...values, id_arrivage], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection errror",
      });
    }
    return res.status(200).json(data);
  });
};

exports.removeArrivage = async (req, res) => {
  const id_arrivage = req.params.id;
  const sql = " DELETE FROM arrivage WHERE idArrivage = ? ";

  db.query(sql, [id_arrivage], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection errror",
      });
    }
    return res.status(200).json(data);
  });
};
