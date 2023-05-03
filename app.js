const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const categoryRouter = require("./routes/category.route.js");

app.get("/", (req, res) => {
  res.json("hello");
});

app.use("/category", categoryRouter);

app.listen(8000, () => {
  console.log("Connected to backend.");
});
