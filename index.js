const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const { default: mongoose } = require("mongoose");
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
// defauult route
app.get("/", (req, res) => {
  res.send("server work!");
});

//menus routes
const menusRoutes = require("./routes/menus");
app.use("/api/menu", menusRoutes);

//categories routes
const categoriesRoutes = require("./routes/categories");
app.use("/api/category", categoriesRoutes);

//products routes
const productsRoutes = require("./routes/products");
app.use("/api/product", productsRoutes);

//orders routes
const ordersRoutes = require("./routes/orders");
app.use("/api/order", ordersRoutes);

mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
});
mongoose.connection
  .once("open", () => {
    console.log("connected to database");
  })
  .on("error", (error) => {
    console.log("error", error);
  });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server is running on port->" + port);
});
