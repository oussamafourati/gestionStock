import mysql from "mysql2";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "stock_app",
  })
  .promise();

export async function getCategories() {
  const [rows] = await pool.query("Select * from category");
  return rows;
}

export async function getCategory(id) {
  const [rows] = await pool.query(
    `
    select * from category where idcategory = ? 
    `,
    [id]
  );
  return rows[0];
}

export async function createCategory(nom, image, id_parent) {
  const [result] = await pool.query(
    `
    Insert into category (nom, image, id_parent)
    values(?, ?, ?)
    `,
    [nom, image, id_parent]
  );
  const id = result.insertId;
  return getCategory(id);
}

export async function updateCategory(id, nom, image, id_parent) {
  const [result] = await pool.query(
    `UPDATE category SET nom = ?, image = ?, id_parent = ? where idcategory = ?`,
    [id, nom, image, id_parent]
  );

  return result;
}

export async function deleteCategory(id) {
  const [result] = await pool.query(
    `
    delete from category where idcategory = ?
    `,
    [id]
  );
  return getCategories();
}
