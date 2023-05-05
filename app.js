const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const categoryRouter = require("./routes/category.route.js");
const fournisseurRouter = require("./routes/fournisseur.route.js");

app.use("/category", categoryRouter);
app.use("/fournisseur", fournisseurRouter);

app.listen(8000, () => {
  console.log("Connected to backend.");
});
