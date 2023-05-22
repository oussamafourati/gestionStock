const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

const categoryRouter = require("./routes/category.route");
const fournisseurRouter = require("./routes/fournisseur.route");
const clientphysiqueRouter = require("./routes/clientpyhsique.route");
const clientMoraleRouter = require("./routes/clientmorale.route");
const productRoute = require("./routes/produit.route");
const ArrivageRoute = require("./routes/arrivage.route");
const arrivageProduitRoute = require("./routes/arrivageProduit.route");
const chargesRoute = require("./routes/charges.route");
const factureRoute = require("./routes/facture.route");
const produitFactureRoute = require("./routes/produitFacture.route");
const accountRoute = require("./routes/compte.route");
const noteRoute = require("./routes/notes.route");
const subCategoryRoute = require("./routes/subCategory.route");
// const stockRoute = require("./routes/stock.route");

app.use("/category", categoryRouter);
app.use("/subCategory", subCategoryRoute);
app.use("/fournisseur", fournisseurRouter);
app.use("/clientPyh", clientphysiqueRouter);
app.use("/clientMo", clientMoraleRouter);
app.use("/product", productRoute);
app.use("/arrivage", ArrivageRoute);
app.use("/arrivageProduit", arrivageProduitRoute);
app.use("/charges", chargesRoute);
app.use("/factures", factureRoute);
app.use("/produitFactures", produitFactureRoute);
app.use("/user", accountRoute);
app.use("/notes", noteRoute);
// app.use("/stock", stockRoute);

app.listen(8000, () => {
  console.log("Connected to backend.");
});
