const { json } = require("express");
const menu = require("../models/menus");

const getMenus = async (req, res) => {
  try {
    const menus = await menu.find();
    res.status(200).json(menus);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const createMenu = async (req, res) => {
  const menu_name = req.body.menu_name;
  const menu_burger_selection = req.body.menu_burger_selection;
  const menu_snacks_selection = req.body.menu_snacks_selection;
  const menu_drink_selection = req.body.menu_drink_selection;
  const menu_cips_selection = req.body.menu_cips_selection;
  const menu_sauce_selection = req.body.menu_sauce_selection;

  const menu_price = req.body.menu_price;
  const menu_image = req.body.menu_image;

  const newMenu = new menu({
    menu_name,
    menu_burger_selection,
    menu_snacks_selection,
    menu_drink_selection,
    menu_cips_selection,
    menu_sauce_selection,
    menu_price,
    menu_image,
  });
  try {
    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
// clear all menu
const clearMenus = async (req, res) => {
  try {
    await menu.deleteMany();
    res.status(200).json({ message: "All menu deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// delete a menu
const deleteMenu = async (req, res) => {
  const id = req.params.id;
  try {
    await menu.findByIdAndDelete(id);
    res.status(200).json({ message: "Menu deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// updat a menu
const updateMenu = async (req, res) => {
  const _id = req.params.id;
  const menu_name = req.body.menu_name;
  const menu_burger_selection = req.body.menu_burger_selection;
  const menu_snacks_selection = req.body.menu_snacks_selection;
  const menu_drink_selection = req.body.menu_drink_selection;
  const menu_cips_selection = req.body.menu_cips_selection;
  const menu_sauce_selection = req.body.menu_sauce_selection;

  const menu_price = req.body.menu_price;
  const menu_image = req.body.menu_image;

  try {
    const updatedMenu = await menu.findByIdAndUpdate(
      _id,
      {
        menu_name,
        menu_burger_selection,
        menu_snacks_selection,
        menu_drink_selection,
        menu_cips_selection,
        menu_sauce_selection,
        menu_price,
        menu_image,
      },
      { new: true }
    );
    res.status(200).json(updatedMenu);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getMenus,
  createMenu,
  clearMenus,
  deleteMenu,
  updateMenu,
};
