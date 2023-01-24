const { json } = require("express");
const order = require("../models/orders");
const mongose = require("mongoose");
const getOrders = async (req, res) => {
  try {
    const orders = await order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createOrder = async (req, res) => {
  const newOrder = new order({
    orderTableNo: req.body.orderTableNo,
    orderStatus: req.body.orderStatus,
    orderTotalPrice: req.body.orderTotalPrice,
    orderProducts: req.body.orderProducts,
    orderDate: req.body.orderDate,
  });
  try {
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateOrder = async (req, res) => {
  const _id = req.body._id;
  const orderTableNo = req.body.orderTableNo;
  const orderStatus = req.body.orderStatus;
  const orderTotalPrice = req.body.orderTotalPrice;
  const orderProducts = req.body.orderProducts;
  const orderDate = req.body.orderDate;

  try {
    const updatedOrder = await order.findByIdAndUpdate(
      _id,
      {
        orderTableNo,
        orderStatus,
        orderTotalPrice,
        orderProducts,
        orderDate,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;

  if (!mongose.Types.ObjectId.isValid(id))
    return res.status(404).send("No order with that id");

  await order.findByIdAndRemove(id);

  res.json({ message: "Order deleted successfully" });
};
const clearOrders = async (req, res) => {
  try {
    await order.deleteMany();
    res.status(200).json({ message: "All orders deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  clearOrders,
};
