const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const categoryRouter = require("./routes/category.route.js");
const fournisseurRouter = require("./routes/fournisseur.route.js");
const clientphysiqueRouter = require("./routes/clientpyhsique.route.js");
const clientMoraleRouter = require("./routes/clientmorale.route.js");
const productRoute = require("./routes/produit.route.js");

app.use("/category", categoryRouter);
app.use("/fournisseur", fournisseurRouter);
app.use("/clientPyh", clientphysiqueRouter);
app.use("/clientMo", clientMoraleRouter);
app.use("/product", productRoute);

app.listen(8000, () => {
  console.log("Connected to backend.");
});
