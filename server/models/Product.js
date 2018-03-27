const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  productId: String,
  productName: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

mongoose.model("Product", productSchema);
