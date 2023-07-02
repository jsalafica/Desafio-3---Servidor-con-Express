import express from "express";
import { ProductManager } from "./ProductManager.js";

const app = express();
const PORT = 8080;
const productManager = new ProductManager("products.json");

app.get("/products", async (req, res) => {
  const { limit } = req.query;
  try {
    let response = await productManager.getProducts();
    if (limit) {
      let tempArray = response.filter((dat, index) => index < limit);
      res.json({ data: tempArray, limit: limit, quantity: tempArray.length });
    } else {
      res.json({ data: response, limit: false, quantity: response.length });
    }
  } catch (err) {
    console.log(err);
  }
});

app.get("/products/:pid", async (req, res) => {
  const { pid } = req.params;
  let product = await productManager.getProductById(Number(pid));
  if (product) {
    res.json({ message: "success", data: product });
  } else {
    res.json({
      message: "error",
      data: "El producto solicitado no existe",
    });
  }
});

app.get("/", (req, res) => {
  return res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
