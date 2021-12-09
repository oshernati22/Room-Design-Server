const mongoose = require("mongoose");

const FurnitureSechma = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
  },
  price: {
    type: String,
  },
});

const Furniture = mongoose.model("furniture", FurnitureSechma);
module.exports = Furniture;
