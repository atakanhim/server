const { json } = require("express");
const product = require("../models/products");
const { default: mongoose } = require("mongoose");

const getProducts = async (req, res) => {
  try {
    const categories = await product.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const updateProduct = async (req, res) => {
  const _id = req.params.id;
  const product_name = req.body.product_name;
  const product_description = req.body.product_description;
  const product_image = req.body.product_image;
  const product_price = req.body.product_price;
  const product_category = req.body.product_category;
  const product_content = req.body.product_content;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No product with that id");

  const updatedProduct = {
    _id,
    product_name,
    product_description,
    product_image,
    product_price,
    product_category,
    product_content,
  };

  await product.findByIdAndUpdate(_id, updatedProduct, { new: true });

  res.json(updatedProduct);
};

const createProduct = async (req, res) => {
  const product_name = req.body.product_name;
  const product_description = req.body.product_description;
  const product_image = req.body.product_image;
  const product_price = req.body.product_price;
  const product_category = req.body.product_category;
  const product_content = req.body.product_content;

  const newProduct = new product({
    product_name,
    product_description,
    product_image,
    product_price,
    product_category,
    product_content,
  });

  console.log("this is new product : \n " + newProduct);
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
    console.log(error);
  }
};

const clearProducts = async (req, res) => {
  try {
    await product.deleteMany();
    res.status(200).json({ message: "All products deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    await product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted " + id });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  createProduct,
  clearProducts,
  deleteProduct,
  updateProduct,
};
