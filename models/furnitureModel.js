const mongoose = require("mongoose");

const FurnitureSechma = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  designer: {
    type: String,
  },
  file: {
    type: String,
  },
  price: {
    type: String,
  },
});

const Furniture = mongoose.model("furniture", FurnitureSechma);
module.exports = Furniture;
