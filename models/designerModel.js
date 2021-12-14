const mongoose = require("mongoose");

const DesignerSechma = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  photo: {
    type: String,
  },
});

const Designer = mongoose.model("designer", DesignerSechma);
module.exports = Designer;
