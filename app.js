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
const ArrivageRoute = require("./routes/arrivage.route.js");
const arrivageProduitRoute = require("./routes/arrivageProduit.route.js");
const chargesRoute = require("./routes/charges.route.js");
const factureRoute = require("./routes/facture.route.js");
const produitFactureRoute = require("./routes/produitFacture.route.js");
const accountRoute = require("./routes/compte.route.js");
const noteRoute = require("./routes/notes.route.js");

app.use("/category", categoryRouter);
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

app.listen(8000, () => {
  console.log("Connected to backend.");
});
