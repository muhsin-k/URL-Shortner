const mongoose = require("mongoose");
const { Schema } = mongoose;

const urlShortenSchema = new Schema({
  productId: String,
  originalUrl: String,
  shortCode: String,
  shortUrl: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

mongoose.model("UrlShorten", urlShortenSchema);
