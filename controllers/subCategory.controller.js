const db = require("../config/db.config");

exports.getAllSubCategory = async (req, res) => {
  const sql =
    "SELECT S.*, C.* From SubCategory as S INNER JOIN category as C ON S.parentID = C.idcategory";
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.status(201).send(data);
  });
};

exports.getOneSubCategory = async (req, res) => {
  const idSubCategory = req.params.id;
  const sql =
    "SELECT S.*, C.* From SubCategory as S INNER JOIN category as C ON S.parentID = C.idcategory WHERE idSubCategory = ? ";
  db.query(sql, [idSubCategory], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.status(201).send(data);
  });
};

exports.createNewSubCategory = async (req, res) => {
  const sql =
    "INSERT INTO SubCategory(`title`, `subDescription`, `parentID`) VALUES (?)";
  title = req.body.title;
  subDescription = req.body.subDescription;
  parentID = req.body.parentID;

  const values = [title, subDescription, parentID];

  db.query(sql, [values], (err, data) => {
    if (err) return res.send(err);
    return res.status(201).send(data);
  });
};

exports.updateSubCategory = async (req, res) => {
  const idSubCategory = req.params.id;
  const sql =
    "UPDATE SubCategory SET `title`=?, `subDescription`=?, `parentID`=? WHERE idSubCategory = ?";

  title = req.body.title;
  subDescription = req.body.subDescription;
  parentID = req.body.parentID;

  const values = [title, subDescription, parentID];

  db.query(sql, [...values, idSubCategory], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
};

exports.removeSubCategory = async (req, res) => {
  const idSubCategory = req.params.id;
  const sql = " DELETE FROM SubCategory WHERE idSubCategory = ? ";

  db.query(sql, [idSubCategory], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
};
