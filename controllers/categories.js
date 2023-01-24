const { json } = require("express");
const category = require("../models/categories");

const getCategories = async (req, res) => {
  try {
    const categories = await category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const createCategory = async (req, res) => {
  const category_name = req.body.category_name;
  const category_description = req.body.category_description;
  const category_image = req.body.category_image;

  console.log(category_name, category_description, category_image);

  const newCategory = new category({
    category_name,
    category_description,
    category_image,
  });
  try {
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
// clear all categories
const clearCategories = async (req, res) => {
  try {
    await category.deleteMany();
    res.status(200).json({ message: "All categories deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// delete a category
const deleteCategory = async (req, res) => {
  const id = req.params.id;
  try {
    await category.findByIdAndDelete(id);
    res.status(200).json({ message: "Category deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// updat a category
const updateCategory = async (req, res) => {
  const _id = req.params.id;
  const category_name = req.body.category_name;
  const category_description = req.body.category_description;
  const category_image = req.body.category_image;

  try {
    const updatedCategory = await category.findByIdAndUpdate(
      _id,
      {
        category_name,
        category_description,
        category_image,
      },
      { new: true }
    );
    res.status(200).json(updatedCategory);
    console.log(updatedCategory);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getCategories,
  createCategory,
  clearCategories,
  deleteCategory,
  updateCategory,
};
