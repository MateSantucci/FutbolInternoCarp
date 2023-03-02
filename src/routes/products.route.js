const { Router } = require("express");
const productsRouter = Router();


const ProductModel = require("../models/product.model");

const FileManager = require("../managers/fileManager");


const fileManager = new FileManager("./src/database/products.json");


const ItemsValidate = require("../middlewares/itemsValidate");

const Upload = require("../lib/multer");


productsRouter.get("/", async (req, res) => {
  const { limit } = req.query;
  
  try {
    const products = await fileManager.getData();
    
    if (limit && limit <= products.length) {
      const limitedProducts = products.slice(0, limit);
      res.status(200).json(limitedProducts);
    } else {
      res.status(200).json(products);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


productsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  
  try {
    const product = await fileManager.getDataById(id);

    if (product) res.status(200).json(product);
    else res.status(404).json({ error: `Not data found with id ${id}.` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


productsRouter.post("/", Upload, async (req, res) => {
  const { title, description, code, stock, category, price } = req.body; 

  const files = await req.files.map(file => file.filename);


  if (ItemsValidate(title, description, code, stock, category, price)) {
    res.status(400).json({ error: "Some of the fields are empty." });
  } else {
      try {
        const newProduct = new ProductModel(title, description, code, Number(stock), category, Number(price), files);
        const product = await fileManager.postData(newProduct);
        res.status(200).json({ status: "success", payload: product });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
});


productsRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, code, stock, category, price } = req.body;

  try {

    const product = await fileManager.getDataById(id);

    if (ItemsValidate(title, description, code, stock, category, price)) {
      res.status(400).json({ error: "Some of the fields are empty." });
      return;
    } 


    const newProduct = new ProductModel(title, description, code, Number(stock), category, Number(price), product.files, product.status);  


    const updatedProduct = await fileManager.updateDataById(id, newProduct);

    if (!updatedProduct) res.status(404).json({ error: `Not data found with id ${id}.` });
    else res.status(200).json(updatedProduct);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }

});


productsRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const product = await fileManager.deleteDataById(id);

    if (!product) res.status(404).json({ error: `Not data found with id ${id}.` });
    else res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = productsRouter;