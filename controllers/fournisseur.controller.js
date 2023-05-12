const db = require("../config/db.config");

exports.createFournisseur = async (req, res) => {
  const sql =
    "INSERT INTO fournisseur(`raison_sociale`, `adresse`, `tel`, `mail`, `type`, `matricule_fiscale`, `logo`, `rib`, `etat`, `piecejointes`) VALUES (?)";

  raison_sociale = req.body.raison_sociale;
  adresse = req.body.adresse;
  tel = req.body.tel;
  mail = req.body.mail;
  type = req.body.type;
  matricule_fiscale = req.body.matricule_fiscale;
  logo = req.file.buffer.toString("base64");
  //logo = req.files.buffer.toString("base64");
  rib = req.body.rib;
  etat = req.body.etat;
  //piecejointes = req.files.buffer.toString("base64");
  piecejointes = req.body.piecejointes;

  const values = [
    raison_sociale,
    adresse,
    tel,
    mail,
    type,
    matricule_fiscale,
    logo,
    rib,
    etat,
    piecejointes,
  ];

  db.query(sql, [values], (err, data) => {
    if (err) return res.send(err);
    return res.status(201).json(req.body);
  });
};

exports.getAllFournisseur = async (req, res) => {
  const sql = "SELECT * from fournisseur;";
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.status(201).json(data);
  });
};

exports.getOneFournisseur = async (req, res) => {
  const id_fournisseur = req.params.id;
  const sql = "SELECT * FROM fournisseur WHERE idfournisseur  = ? ";
  db.query(sql, [id_fournisseur], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.status(201).json(data);
  });
};

exports.updateFournisseur = async (req, res) => {
  const id_fournisseur = req.params.id;
  const q =
    "UPDATE fournisseur SET `raison_sociale`= ?, `adresse`= ?, `tel`= ?, `mail`= ?, `type`= ?, `matricule_fiscale`= ?, `logo`= ?, `rib`= ?, `etat`= ?, `piecejointes`= ? WHERE idfournisseur = ?";

  raison_sociale = req.body.raison_sociale;
  adresse = req.body.adresse;
  tel = req.body.tel;
  mail = req.body.mail;
  type = req.body.type;
  matricule_fiscale = req.body.matricule_fiscale;
  logo = req.file.buffer.toString("base64");
  //logo = req.files.buffer.toString("base64");
  rib = req.body.rib;
  etat = req.body.etat;
  piecejointes = req.body.piecejointes;
  //piecejointes = req.files.buffer.toString("base64");

  const values = [
    raison_sociale,
    adresse,
    tel,
    mail,
    type,
    matricule_fiscale,
    logo,
    rib,
    etat,
    piecejointes,
  ];

  db.query(q, [...values, id_fournisseur], (err, data) => {
    if (err) return res.send(err);
    return res.status(201).json(data);
  });
};

exports.removeFournisseur = async (req, res) => {
  const id_fournisseur = req.params.id;
  const q = " DELETE FROM fournisseur WHERE idfournisseur = ? ";

  db.query(q, [id_fournisseur], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
};
