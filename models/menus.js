// modelller birer tablo gibi düşünülebilir.
const mongose = require("mongoose");
//random id üretmek için nanoid
const { v4: uuidv4 } = require("uuid");

const { Schema } = mongose;

const ProductSchema = new Schema(
  {
    menu_id: { type: String, default: uuidv4() },
    menu_name: { type: String, required: true },
    menu_burger_selection: { type: Array, required: true }, //product_name
    menu_cips_selection: { type: Array, required: true },
    menu_snacks_selection: { type: Array, required: true },
    menu_drink_selection: { type: Array, required: true },
    menu_sauce_selection: { type: Array, required: true },
    menu_price: { type: Number, required: true },
    menu_image: {
      type: String,
      default:
        "https://cdn.yemek.com/mnresize/1250/833/uploads/2022/05/hamburger-yemekcom.jpg",
    },
  },
  { timestamps: true }
);
module.exports = mongose.model("menu", ProductSchema);
