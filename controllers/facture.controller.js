const mysql = require("mysql2");
const db = require("../config/db.config");

exports.getAllFactures = async (req, res) => {
  const sql =
    "SELECT F.*, C.* From facture as F INNER JOIN client_physique as C ON F.clientID = C.idclient_p";
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.status(201).send(data);
  });
};

exports.getOneFacture = async (req, res) => {
  const idFacture = req.params.id;
  const sql =
    "SELECT F.*, C.* From facture as F INNER JOIN client_physique as C ON F.clientID = C.idclient_p WHERE idFacture = ? ";
  db.query(sql, [idFacture], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.status(201).send(data);
  });
};

exports.createNewFacture = async (req, res) => {
  const sql =
    "INSERT INTO facture(`designationFacture`, `dateFacturation`, `montantHt`, `montantTtc`, `datePaiement`, `modePaiement`, `statusFacture`, `articles`, `clientID`) VALUES (?)";
  designationFacture = req.body.designationFacture;
  dateFacturation = req.body.dateFacturation;
  montantHt = req.body.montantHt;
  montantTtc = req.body.montantTtc;
  datePaiement = req.body.datePaiement;
  modePaiement = req.body.modePaiement;
  statusFacture = req.body.statusFacture;
  articles = req.body.articles;
  clientID = req.body.clientID;

  const values = [
    designationFacture,
    dateFacturation,
    montantHt,
    montantTtc,
    datePaiement,
    modePaiement,
    statusFacture,
    articles,
    clientID,
  ];

  db.query(sql, [values], (err, data) => {
    if (err) return res.send(err);
    return res.status(201).send(data);
  });
};

exports.updateFacture = async (req, res) => {
  const idFacture = req.params.id;
  const sql =
    "UPDATE facture SET `designationFacture`=?, `dateFacturation`=?, `montantHt`=?, `montantTtc`=?, `datePaiement`=?, `modePaiement`=?, `statusFacture`=?, `articles`=?, `clientID`=? WHERE idFacture = ?";

  designationFacture = req.body.designationFacture;
  dateFacturation = req.body.dateFacturation;
  montantHt = req.body.montantHt;
  montantTtc = req.body.montantTtc;
  datePaiement = req.body.datePaiement;
  modePaiement = req.body.modePaiement;
  statusFacture = req.body.statusFacture;
  articles = req.body.articles;
  clientID = req.body.clientID;

  const values = [
    designationFacture,
    dateFacturation,
    montantHt,
    montantTtc,
    datePaiement,
    modePaiement,
    statusFacture,
    articles,
    clientID,
  ];

  db.query(sql, [...values, idFacture], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
};

exports.removeFacture = async (req, res) => {
  const idFacture = req.params.id;
  const sql = " DELETE FROM facture WHERE idFacture = ? ";

  db.query(sql, [idFacture], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
};
