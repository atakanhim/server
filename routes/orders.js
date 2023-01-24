const express = require("express");

const {
  getOrders,
  createOrder,
  clearOrders,
  deleteOrder,
  updateOrder,
} = require("../controllers/orders");
const router = express.Router();

router.get("/", getOrders); // controller içindeki getPosts fonksiyonu çalışır.
router.post("/", createOrder); // controller içindeki createPost fonksiyonu çalışır.

router.delete("/", clearOrders); // clear all orders
router.delete("/:id", deleteOrder); // clear one order

router.put("/:id", updateOrder); // update one order

module.exports = router;
