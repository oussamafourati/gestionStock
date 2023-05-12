const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())


var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

const categoryRouter = require("./routes/category.route.js");
const loginRoute = require("./routes/login.route.js");
const fournisseurRouter = require("./routes/fournisseur.route.js");
app.get("/", (req, res) => {
  res.json("hello");
});

app.use("/category", categoryRouter);
app.use("/login",loginRoute);
app.use("/fournisseur", fournisseurRouter);

app.listen(8000, () => {
  console.log("Connected to backend.");
});
