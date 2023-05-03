import express from "express";

import {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "./database.js";

const app = express();
const router = express.Router();

app.use(express.json());

app.get("/categories", async (req, res) => {
  const categories = await getCategories();
  res.send(categories);
});

app.get("/category/:id", async (req, res) => {
  const id = req.params.id;
  const category = await getCategory(id);
  res.send(category);
});

app.post("/categories", async (req, res) => {
  const { nom, image, id_parent } = req.body;
  const category = await createCategory(nom, image, id_parent);
  res.status(201).send(category);
});

app.put("/category/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { nom, image, id_parent } = req.body;
    const category = await updateCategory(id, nom, image, id_parent);
    res.status(201).send(category);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/category/:id", async (req, res) => {
  const id = req.params.id;
  const categories = await deleteCategory(id);
  res.status(201).send(categories);
});
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
