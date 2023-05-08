const mysql = require("mysql2");

const db = require("../config/db.config");

exports.createClient_Phy = async (req, res) => {
  const sql =
    "INSERT INTO client_physique(`raison_sociale`, `cin`, `adresse`, `tel`, `mail`, `avatar`, `rib`, `etat`, `credit`, `piecejointes`) VALUES (?)";

  raison_sociale = req.body.raison_sociale;
  cin = req.body.cin;
  adresse = req.body.adresse;
  tel = req.body.tel;
  mail = req.body.mail;
  avatar = req.files.buffer.toString("base64");
  rib = req.body.rib;
  etat = req.body.etat;
  credit = req.body.credit;
  piecejointes = req.files.buffer.toString("base64");

  const values = [
    raison_sociale,
    cin,
    adresse,
    tel,
    mail,
    avatar,
    rib,
    etat,
    credit,
    piecejointes,
  ];

  db.query(sql, [values], (err, data) => {
    if (err) return res.send(err);
    return res.status(201).json(data);
  });
};

exports.getAllClientPhy = async (req, res) => {
  const sql = "SELECT * from client_physique";
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.status(201).json(data);
  });
};

exports.getOneClientPhy = async (req, res) => {
  const id_clientphy = req.params.id;
  const sql = "SELECT * FROM client_physique WHERE idclient_p  = ? ";
  db.query(sql, [id_clientphy], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.status(201).json(data);
  });
};

exports.updateClientPhy = async (req, res) => {
  const id_clientphy = req.params.id;
  const q =
    "UPDATE client_physique SET `raison_sociale`= ?,`cin`= ?, `adresse`= ?, `tel`= ?, `mail`= ?, `avatar`= ? `rib`= ?, `etat`= ?, `credit`= ?, `piecejointes`= ? WHERE idclient_p = ?";

  raison_sociale = req.body.raison_sociale;
  cin = req.body.cin;
  adresse = req.body.adresse;
  tel = req.body.tel;
  mail = req.body.mail;
  avatar = req.files.buffer.toString("base64");
  rib = req.body.rib;
  etat = req.body.etat;
  credit = req.body.credit;
  piecejointes = req.files.buffer.toString("base64");

  const values = [
    raison_sociale,
    cin,
    adresse,
    tel,
    mail,
    avatar,
    rib,
    etat,
    credit,
    piecejointes,
  ];

  db.query(q, [...values, id_clientphy], (err, data) => {
    if (err) return res.send(err);
    return res.status(201).send(data);
  });
};

exports.removeClientPhy = async (req, res) => {
  const id_clientphy = req.params.id;
  const q = " DELETE FROM client_physique WHERE idclient_p = ? ";

  db.query(q, [id_clientphy], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
};
