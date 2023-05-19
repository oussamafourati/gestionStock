const db = require("../config/db.config");

exports.createproduitFacture = async (req, res) => {
  const sql =
    "INSERT INTO produitFacture(`produitID`, `factureID`, `quantiteProduit`) VALUES (?)";

  produitID = req.body.produitID;
  factureID = req.body.factureID;
  quantiteProduit = req.body.quantiteProduit;

  const values = [produitID, factureID, quantiteProduit];

  db.query(sql, [values], (err, data) => {
    if (err) return res.send(err);
    return res.status(201).json(data);
  });
};

exports.getAllProduitFacture = async (req, res) => {
  const sql =
    "SELECT PF.*, P.*, F.* From produitFacture as PF INNER JOIN produit as P ON PF.produitID = P.idproduit INNER JOIN facture as F ON PF.factureID = F.idFacture";
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.status(200).json(data);
  });
};

exports.getOneProductFacture = async (req, res) => {
  const id_productFacture = req.params.id;
  const sql =
    "SELECT PF.*, P.*, F.* From produitFacture as PF INNER JOIN produit as P ON PF.produitID = P.idproduit INNER JOIN facture as F ON PF.factureID = F.idFacture WHERE idproduitFacture  = ? ";
  db.query(sql, [id_productFacture], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.status(200).json(data);
  });
};

exports.updateProductFacture = async (req, res) => {
  const id_productFacture = req.params.id;
  const sql =
    "UPDATE produitFacture SET `produitID`= ?, `factureID`= ?, `quantiteProduit`= ? WHERE idproduitFacture = ?";

  produitID = req.body.produitID;
  factureID = req.body.factureID;
  quantiteProduit = req.body.quantiteProduit;

  const values = [produitID, factureID, quantiteProduit];

  db.query(sql, [...values, id_productFacture], (err, data) => {
    if (err) return res.send(err);
    return res.status(201).json(data);
  });
};

// @route   DELETE /product/deleteproduct
// @desc    Delete one product
// @params ?id passed in query
exports.removeProductFacture = async (req, res) => {
  const id_productFacture = req.params.id;
  const sql = " DELETE FROM produitFacture WHERE idproduitFacture = ? ";

  db.query(sql, [id_productFacture], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
};
