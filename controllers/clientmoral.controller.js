const db = require("../config/db.config");

exports.createClient_Mo = async (req, res) => {
  const sql =
    "INSERT INTO client_moral(`raison_sociale`, `mat`, `adresse`, `tel`, `mail`, `logo`, `rib`, `etat`, `remarque`, `credit`, `piecejointes`) VALUES (?)";

  raison_sociale = req.body.raison_sociale;
  mat = req.body.mat;
  adresse = req.body.adresse;
  tel = req.body.tel;
  mail = req.body.mail;
  //avatar = req.files.buffer.toString("base64");
  logo = req.file.buffer.toString("base64");
  rib = req.body.rib;
  etat = req.body.etat;
  remarque = req.body.remarque;
  credit = req.body.credit;
  //piecejointes = req.files.buffer.toString("base64");
  piecejointes = req.body.piecejointes;

  const values = [
    raison_sociale,
    mat,
    adresse,
    tel,
    mail,
    logo,
    rib,
    etat,
    remarque,
    credit,
    piecejointes,
  ];

  db.query(sql, [values], (err, data) => {
    if (err) return res.send(err);
    return res.status(201).json(data);
  });
};

exports.getAllClientMo = async (req, res) => {
  const sql = "SELECT * from client_moral";
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.status(201).json(data);
  });
};

exports.getOneClientMo = async (req, res) => {
  const id_clientmo = req.params.id;
  const sql = "SELECT * FROM client_moral WHERE idclient_m  = ? ";
  db.query(sql, [id_clientmo], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.status(201).json(data);
  });
};

exports.updateClientMo = async (req, res) => {
  const id_clientmo = req.params.id;
  const q =
    "UPDATE client_moral SET `raison_sociale`= ?, `mat`= ?, `adresse`= ?, `tel`= ?, `mail`= ?, `logo`= ?, `rib`= ?, `etat`= ?, `remarque`= ?, `credit`= ?, `piecejointes`= ? WHERE idclient_m = ?";

  raison_sociale = req.body.raison_sociale;
  mat = req.body.mat;
  adresse = req.body.adresse;
  tel = req.body.tel;
  mail = req.body.mail;
  //avatar = req.files.buffer.toString("base64");
  logo = req.file.buffer.toString("base64");
  rib = req.body.rib;
  etat = req.body.etat;
  remarque = req.body.remarque;
  credit = req.body.credit;
  //piecejointes = req.files.buffer.toString("base64");
  piecejointes = req.body.piecejointes;

  const values = [
    raison_sociale,
    mat,
    adresse,
    tel,
    mail,
    logo,
    rib,
    etat,
    remarque,
    credit,
    piecejointes,
  ];

  db.query(q, [...values, id_clientmo], (err, data) => {
    if (err) return res.send(err);
    return res.status(201).send(data);
  });
};

exports.removeClientMo = async (req, res) => {
  const id_clientmo = req.params.id;
  const q = " DELETE FROM client_moral WHERE idclient_m = ? ";

  db.query(q, [id_clientmo], (err, data) => {
    if (err) return res.send(err);
    return res.status(201).send(data);
  });
};
