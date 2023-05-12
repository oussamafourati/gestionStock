const db = require("../config/db.config");

exports.createArrivageProduit = async (req, res) => {
  const sql =
    "INSERT INTO arrivageProduit(`produitID`, `arrivageID`, `quantite`, `piecejointes`) VALUES (?);";

  produitID = req.body.produitID;
  arrivageID = req.body.arrivageID;
  quantite = req.body.quantite;
  //piecejointes = req.file.buffer.toString("base64");
  piecejointes = req.body.piecejointes;

  const values = [produitID, arrivageID, quantite, piecejointes];

  db.query(sql, [values], (err, data) => {
    if (err) return res.send(err);
    return res.status(201).send(data);
  });
};

exports.getAllArrivageProduit = async (req, res) => {
  const sql =
    "SELECT AP.*, A.*, P.nomProduit From arrivageProduit as AP INNER JOIN arrivage as A ON AP.arrivageID = A.idArrivage INNER JOIN produit as P ON AP.produitID = P.idproduit";
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.status(200).json(data);
  });
};

exports.getOneArrivageProduit = async (req, res) => {
  const id_arrivageproduit = req.params.id;
  const sql =
    "SELECT AP.*, A.*, P.nomProduit From arrivageProduit as AP INNER JOIN arrivage as A ON AP.arrivageID = A.idArrivage INNER JOIN produit as P ON AP.produitID = P.idproduit WHERE idArrivageProduit  = ? ";
  db.query(sql, [id_arrivageproduit], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.status(200).json(data);
  });
};

exports.updateArrivageProduit = async (req, res) => {
  const id_arrivageproduit = req.params.id;
  const sql =
    "UPDATE arrivageProduit SET `produitID`= ?, `arrivageID`= ?, `quantite`= ?, `piecejointes`= ? WHERE idArrivageProduit = ?";

  produitID = req.body.produitID;
  arrivageID = req.body.arrivageID;
  quantite = req.body.quantite;
  //piecejointes = req.file.buffer.toString("base64");
  piecejointes = req.body.piecejointes;

  const values = [produitID, arrivageID, quantite, piecejointes];

  db.query(sql, [...values, id_arrivageproduit], (err, data) => {
    if (err) return res.send(err);
    return res.status(201).json(req.body);
  });
};

exports.removeArrivageProduit = async (req, res) => {
  const id_arrivageproduit = req.params.id;
  const sql = " DELETE FROM arrivageProduit WHERE idArrivageProduit = ? ";

  db.query(sql, [id_arrivageproduit], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
};
