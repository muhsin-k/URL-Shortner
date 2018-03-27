const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = app => {
  app.get("/api/item/:id", async (req, res) => {
    const products = await Product.find({ _user: req.params.id }).cache({
      key: req.params.id
    });
    res.status(200).json(products);
  });
  app.post("/api/item", async (req, res) => {
    const { title, _user } = req.body;
    const product = new Product({
      title,
      _user
    });

    try {
      await item.save();
      res.status(200).json(product);
    } catch (err) {
      res.status(401).json("Invalid User Id");
    }
  });
};
