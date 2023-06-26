const db = require("../config/db.config");

exports.createArrivageProduit = async (req, res) => {
  const sql =
    "INSERT INTO arrivageProduit(`produitID`, `arrivageID`, `quantite`,`prixAchatHt`, `prixAchatTtc`, `prixVente`, `Benifice`, `PourcentageBenifice`, `PrixRemise`, `PourcentageRemise`, `MontantTotalProduit`, `piecejointes`) VALUES (?);";

  produitID = req.body.produitID;
  arrivageID = req.body.arrivageID;
  quantite = req.body.quantite;
  prixAchatHt = req.body.prixAchatHt;
  prixAchatTtc = req.body.prixAchatTtc;
  prixVente = req.body.prixVente;
  Benifice = req.body.Benifice;
  PourcentageBenifice = req.body.PourcentageBenifice;
  PrixRemise = req.body.PrixRemise;
  PourcentageRemise = req.body.PourcentageRemise;
  MontantTotalProduit = req.body.MontantTotalProduit;
  piecejointes = req.body.piecejointes;

  const values = [
    produitID,
    arrivageID,
    quantite,
    prixAchatHt,
    prixAchatTtc,
    prixVente,
    Benifice,
    PourcentageBenifice,
    PrixRemise,
    PourcentageRemise,
    MontantTotalProduit,
    piecejointes,
  ];

  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Database connection errror",
      });
    }
    return res.status(200).json(data);
  });
};

exports.getAllArrivageProduit = async (req, res) => {
  const sql =
    "SELECT AP.*, A.*, P.* From arrivageProduit as AP INNER JOIN produit as P ON AP.produitID = P.idproduit INNER JOIN arrivage as A ON AP.arrivageID = A.idArrivage ";
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Database connection errror",
      });
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
      return res.status(500).json({
        success: false,
        message: "Database connection errror",
      });
    }
    return res.status(200).json(data);
  });
};

exports.getSingleArrivageProduit = async (req, res) => {
  const id_produit = req.params.id;
  const sql =
    "SELECT AP.*, A.*, P.nomProduit From arrivageProduit as AP INNER JOIN arrivage as A ON AP.arrivageID = A.idArrivage INNER JOIN produit as P ON AP.produitID = P.idproduit WHERE produitID  = ? ";
  db.query(sql, [id_produit], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Database connection errror",
      });
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
  piecejointes = req.body.piecejointes;

  const values = [produitID, arrivageID, quantite, piecejointes];

  db.query(sql, [...values, id_arrivageproduit], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Database connection errror",
      });
    }
    return res.status(200).json(data);
  });
};

exports.removeArrivageProduit = async (req, res) => {
  const id_arrivageproduit = req.params.id;
  const sql = " DELETE FROM arrivageProduit WHERE idArrivageProduit = ? ";

  db.query(sql, [id_arrivageproduit], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Database connection errror",
      });
    }
    return res.status(200).json(data);
  });
};
