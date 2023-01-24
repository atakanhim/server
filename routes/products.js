const express = require("express");

const {
  getProducts,
  createProduct,
  clearProducts,
  deleteProduct,
  updateProduct,
} = require("../controllers/products");
const router = express.Router();

router.get("/", getProducts); // controller içindeki getPosts fonksiyonu çalışır.
router.post("/", createProduct); // controller içindeki createPost fonksiyonu çalışır.

router.delete("/", clearProducts); // clear all categories
router.delete("/:id", deleteProduct); // clear one category

router.put("/:id", updateProduct); // update one category

module.exports = router;
