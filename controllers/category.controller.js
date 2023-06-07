const db = require("../config/db.config");

exports.getAll = async (req, res) => {
  const sql =
    // "SELECT DISTINCT C.*, S.* From category as C LEFT JOIN SubCategory as S ON C.idcategory = S.parentID ";
    // "select * from `category` where exists (select * from `SubCategory` where `SubCategory`.`parentID` = `category`.`idcategory`);";
    // "select * from category join SubCategory on category.idcategory = SubCategory.parentID";
    "select * from category";
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

exports.getOne = async (req, res) => {
  const categoryId = req.params.id;
  const sql = "SELECT * FROM category WHERE idcategory = ? ";
  db.query(sql, [categoryId], (err, data) => {
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

exports.create = async (req, res) => {
  const sql =
    "INSERT INTO category(`nom`, `image`, `id_parent`, `final_level`) VALUES (?)";

  image = req.body.image;
  nom = req.body.nom;
  id_parent = req.body.id_parent;
  final_level = req.body.final_level;
  const values = [nom, image, id_parent, final_level];

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

exports.update = async (req, res) => {
  const categoryId = req.params.id;
  const sql =
    "UPDATE category SET `nom`= ?, `image`= ?, `id_parent`= ?, `final_level`= ? WHERE idcategory = ?";

  const values = [
    req.body.nom,
    req.body.image,
    // req.file.buffer.toString("base64"),
    req.body.id_parent,
    req.body.final_level,
  ];

  db.query(sql, [...values, categoryId], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Database connection errror",
      });
    }
    return res.status(200).json({
      success: true,
      data: results,
    });
  });
};

exports.remove = async (req, res) => {
  const categoryId = req.params.id;
  const sql = " DELETE FROM category WHERE idcategory = ? ";

  db.query(sql, [categoryId], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Database connection errror",
      });
    }
    return res.status(200).json({
      success: true,
      data: results,
    });
  });
};
