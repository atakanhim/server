// modelller birer tablo gibi düşünülebilir.
const mongose = require("mongoose");
//random id üretmek için nanoid
const { v4: uuidv4 } = require("uuid");

const { Schema } = mongose;

const ProductSchema = new Schema(
  {
    product_id: { type: String, default: uuidv4() },
    product_name: { type: String, required: true },
    product_description: { type: String, required: true },
    product_content: { type: String, required: true },
    product_category: { type: String, required: true },
    product_price: { type: Number, required: true },
    product_image: {
      type: String,
      default:
        "https://cdn.yemek.com/mnresize/1250/833/uploads/2022/05/hamburger-yemekcom.jpg",
    },
  },
  { timestamps: true }
);
module.exports = mongose.model("product", ProductSchema);
