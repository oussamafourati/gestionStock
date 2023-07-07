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

exports.getChargeMois = async (req, res) => {
  const sql = "select * from charges where MONTH(dateCharges) = MONTH(now());";
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

exports.getChargeMoisDernier = async (req, res) => {
  const sql =
    "select * from charges where MONTH(dateCharges) = MONTH(now())-1;";
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

exports.getChargeWeek = async (req, res) => {
  const sql = "select * from charges where week(dateCharges) = week(now());";
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

exports.createNewCharges = async (req, res) => {
  const sql =
    "INSERT INTO charges(`typeCharges`, `montantCharges`, `dateCharges`, `descriptionCharge`, `piecejointes`) VALUES (?)";

  typeCharges = req.body.typeCharges;
  montantCharges = req.body.montantCharges;
  dateCharges = req.body.dateCharges;
  descriptionCharge = req.body.descriptionCharge;
  piecejointes = req.body.piecejointes;

  const values = [
    typeCharges,
    montantCharges,
    dateCharges,
    descriptionCharge,
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

exports.getSumCharges = async (req, res) => {
  const sql = "SELECT SUM(montantCharges) AS prix_total FROM charges";
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
