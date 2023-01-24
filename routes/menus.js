const express = require("express");

const {
  getMenus,
  createMenu,
  clearMenus,
  deleteMenu,
  updateMenu,
} = require("../controllers/menus");
const router = express.Router();

router.get("/", getMenus); // controller içindeki getPosts fonksiyonu çalışır.
router.post("/", createMenu); // controller içindeki createPost fonksiyonu çalışır.

router.delete("/", clearMenus); // clear all menus
router.delete("/:id", deleteMenu); // clear one menu

router.put("/:id", updateMenu); // update one menu

module.exports = router;
