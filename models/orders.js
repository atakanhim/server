// modelller birer tablo gibi düşünülebilir.
const mongose = require("mongoose");
//random id üretmek için nanoid
const { v4: uuidv4 } = require("uuid");

const { Schema } = mongose;

const ProductSchema = new Schema(
  {
    orderId: { type: String, default: uuidv4() },
    orderTableNo: { type: Number, required: true },
    orderStatus: { type: String, required: true }, //product_name
    orderTotalPrice: { type: Number, required: true },
    orderProducts: { type: Array, required: true },
    orderDate: { type: Date, required: true },
  },
  { timestamps: true }
);
module.exports = mongose.model("order", ProductSchema);
