const mongoose = require("mongoose");
const validUrl = require("valid-url");
const UrlShorten = mongoose.model("UrlShorten");
const constants = require("../config/constants");
const shortCode = require("../middlewares/uniqueUrlCode");
module.exports = app => {
  app.get("/api/item/:code", async (req, res) => {
    const urlCode = req.params.code;
    const item = await UrlShorten.findOne({ urlCode: urlCode });
    if (item) {
      return res.redirect(item.originalUrl);
    } else {
      return res.redirect(constants.errorUrl);
    }
  });

  app.post("/api/item", async (req, res) => {
    const locationDetails = findIpDetails.find(req);
    if (validUrl.isUri(shortBaseUrl)) {
    } else {
      return res.status(404).json("Invalid Base Url format");
    }
    const urlCode = shortCode.generate();
    const updatedAt = new Date();
    if (validUrl.isUri(originalUrl)) {
      try {
        const item = await UrlShorten.findOne({ originalUrl: originalUrl });
        if (item) {
          res.status(200).json(item);
        } else {
          shortUrl = shortBaseUrl + "/" + urlCode;
          const item = new UrlShorten({
            originalUrl,
            shortUrl,
            urlCode,
            updatedAt
          });
          await item.save();
          res.status(200).json({
            originalUrl,
            shortUrl,
            urlCode,
            updatedAt
          });
        }
      } catch (err) {
        res.status(401).json("Invalid User Id");
      }
    } else {
      return res.status(401).json("Invalid Original Url.");
    }
  });
};
