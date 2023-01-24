// modelller birer tablo gibi düşünülebilir.
const mongose = require("mongoose");
//random id üretmek için
const { v4: uuidv4 } = require("uuid");
const { Schema } = mongose;

const CategoriSchema = new Schema(
  {
    category_id: { type: String, default: uuidv4() },
    category_description: { type: String, required: true },
    category_name: { type: String, required: true },
    category_image: {
      type: String,
      default:
        "https://cdn.yemek.com/mnresize/1250/833/uploads/2022/05/hamburger-yemekcom.jpg",
    },
  },
  { timestamps: true }
);
module.exports = mongose.model("category", CategoriSchema);
