const express = require("express");

const {
  getCategories,
  createCategory,
  clearCategories,
  deleteCategory,
  updateCategory,
} = require("../controllers/categories");
const router = express.Router();

router.get("/", getCategories); // controller içindeki getPosts fonksiyonu çalışır.
router.post("/", createCategory); // controller içindeki createPost fonksiyonu çalışır.

router.delete("/", clearCategories); // clear all categories
router.delete("/:id", deleteCategory); // clear one category

router.put("/:id", updateCategory); // update one category
module.exports = router;
