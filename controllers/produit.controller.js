const mysql = require("mysql2");

const db = require("../config/db.config");

// @route   POST /product/newProduct
// @desc    Create a new Product
exports.createProduct = async (req, res) => {
  const sql =
    "INSERT INTO produit(`nomProduit`, `imageProduit`, `marque`, `prixAchatHt`, `prixAchatTtc`, `prixVente`, `remise`,`remarqueProduit`, `categoryID`, `fournisseurID`) VALUES (?)";

  nomProduit = req.body.nomProduit;
  imageProduit = req.file.buffer.toString("base64");
  marque = req.body.marque;
  prixAchatHt = req.body.prixAchatHt;
  prixAchatTtc = req.body.prixAchatTtc;
  prixVente = req.body.prixVente;
  remise = req.body.remise;
  remarqueProduit = req.body.remarqueProduit;
  categoryID = req.body.categoryID;
  fournisseurID = req.body.fournisseurID;

  const values = [
    nomProduit,
    imageProduit,
    marque,
    prixAchatHt,
    prixAchatTtc,
    prixVente,
    remise,
    remarqueProduit,
    categoryID,
    fournisseurID,
  ];

  db.query(sql, [values], (err, data) => {
    if (err) return res.send(err);
    return res.status(201).json(req.body);
  });
};

// @route   GET /product/getAll
// @desc    Get all products
exports.getAllProducts = async (req, res) => {
  const sql =
    "SELECT P.*, C.nom, F.raison_sociale From produit as P INNER JOIN category as C ON P.categoryID = C.idcategory INNER JOIN fournisseur as F ON P.fournisseurID = F.idfournisseur";
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.status(200).json(data);
  });
};

// @route   GET /product/getOne
// @desc    Get all products
// @params ?id passed in query
exports.getOneProduct = async (req, res) => {
  const id_product = req.params.id;
  const sql =
    "SELECT P.*, C.nom, F.raison_sociale From produit as P INNER JOIN category as C ON P.categoryID = C.idcategory INNER JOIN fournisseur as F ON P.fournisseurID = F.idfournisseur WHERE idproduit  = ? ";
  db.query(sql, [id_product], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.status(200).json(data);
  });
};

// @route   PUT /product/updateproduct
// @desc    Update a specific product
// @params ?id passed in query
exports.updateProduct = async (req, res) => {
  const id_product = req.params.id;
  const sql =
    "UPDATE produit SET `nomProduit`= ?, `imageProduit`= ?, `marque`= ?, `prixAchatHt`= ?, `prixAchatTtc`= ?, `prixVente`= ?, `remise`= ?, `remarqueProduit`= ?, `categoryID`= ?, `fournisseurID`= ? WHERE idproduit = ?";

  nomProduit = req.body.nomProduit;
  imageProduit = req.file.buffer.toString("base64");
  marque = req.body.marque;
  prixAchatHt = req.body.prixAchatHt;
  prixAchatTtc = req.body.prixAchatTtc;
  prixVente = req.body.prixVente;
  remise = req.body.remise;
  remarqueProduit = req.body.remarqueProduit;
  categoryID = req.body.categoryID;
  fournisseurID = req.body.fournisseurID;

  const values = [
    nomProduit,
    imageProduit,
    marque,
    prixAchatHt,
    prixAchatTtc,
    prixVente,
    remise,
    remarqueProduit,
    categoryID,
    fournisseurID,
  ];

  db.query(sql, [...values, id_product], (err, data) => {
    if (err) return res.send(err);
    return res.status(201).json(req.body);
  });
};

// @route   DELETE /product/deleteproduct
// @desc    Delete one product
// @params ?id passed in query
exports.removeProduct = async (req, res) => {
  const id_product = req.params.id;
  const sql = " DELETE FROM produit WHERE idproduit = ? ";

  db.query(sql, [id_product], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
};
