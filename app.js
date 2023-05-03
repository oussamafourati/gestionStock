import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "stock_app",
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/all", (req, res) => {
  const q = "SELECT * FROM category";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/category/:id", (req, res) => {
  const categoryId = req.params.id;
  const q = "SELECT * FROM category WHERE idcategory = ? ";
  db.query(q, [categoryId], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/category", (req, res) => {
  const q = "INSERT INTO category(`nom`, `image`, `id_parent`) VALUES (?)";

  const values = [req.body.nom, req.body.image, req.body.id_parent];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/category/:id", (req, res) => {
  const categoryId = req.params.id;
  const q = " DELETE FROM category WHERE idcategory = ? ";

  db.query(q, [categoryId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/category/:id", (req, res) => {
  const categoryId = req.params.id;
  const q =
    "UPDATE category SET `nom`= ?, `image`= ?, `id_parent`= ? WHERE idcategory = ?";

  const values = [req.body.nom, req.body.image, req.body.id_parent];

  db.query(q, [...values, categoryId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8000, () => {
  console.log("Connected to backend.");
});
