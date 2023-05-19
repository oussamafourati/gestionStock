const db = require("../config/db.config");

exports.getAllCharges = async (req, res) => {
  const sql = "SELECT * FROM charges";
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

exports.getOneCharge = async (req, res) => {
  const chargesId = req.params.id;
  const sql = "SELECT * FROM charges WHERE idCharges = ? ";
  db.query(sql, [chargesId], (err, data) => {
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

exports.createNewCharges = async (req, res) => {
  const sql =
    "INSERT INTO charges(`typeCharges`, `montantCharges`, `dateCharges`) VALUES (?)";

  typeCharges = req.body.typeCharges;
  montantCharges = req.body.montantCharges;
  dateCharges = req.body.dateCharges;

  const values = [typeCharges, montantCharges, dateCharges];

  db.query(sql, [values], (err, results) => {
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

exports.updateCharges = async (req, res) => {
  const chargesId = req.params.id;
  const sql =
    "UPDATE charges SET `typeCharges`= ?, `montantCharges`= ?, `dateCharges`= ? WHERE idCharges = ?";

  typeCharges = req.body.typeCharges;
  montantCharges = req.body.montantCharges;
  dateCharges = req.body.dateCharges;

  const values = [typeCharges, montantCharges, dateCharges];

  db.query(sql, [...values, chargesId], (err, results) => {
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

exports.removeCharges = async (req, res) => {
  const chargesId = req.params.id;
  const sql = " DELETE FROM charges WHERE idCharges = ? ";

  db.query(sql, [chargesId], (err, results) => {
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
