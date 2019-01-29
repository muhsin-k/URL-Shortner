const mongoose = require('mongoose');
const validUrl = require('valid-url');
const UrlShorten = mongoose.model('UrlShorten');
const constants = require('../config/constants');
const shortCode = require('../middlewares/uniqueUrlCode');

const cache = require('../services/cache');
module.exports = app => {
  app.get('/api/item/:code', async (req, res) => {
    const urlCode = req.params.code;
    const item = await UrlShorten.findOne({ urlCode: urlCode });
    if (item) {
      return res.redirect(item.originalUrl);
    } else {
      return res.redirect(constants.errorUrl);
    }
  });

  app.post('/api/item', async (req, res) => {
    const { shortBaseUrl, originalUrl } = req.body;
    if (validUrl.isUri(shortBaseUrl)) {
    } else {
      return res.status(404).json('Invalid Base Url format');
    }

    const updatedAt = new Date();
    const queryOptions = { originalUrl };
    if (validUrl.isUri(originalUrl)) {
      let urlData;
      try {
        // Find the item is in the cache
        urlData = await cache.getFromCache('originalUrl', JSON.stringify(queryOptions));
        if (!urlData) {
          // Find the item is in the database
          urlData = await UrlShorten.findOne(queryOptions).exec();
        }

        if (urlData) {
          res.status(200).json(urlData);
        } else {
          const urlCode = shortCode.generate();
          shortUrl = shortBaseUrl + '/' + urlCode;
          const itemToBeSaved = { originalUrl, shortUrl, urlCode, updatedAt };

          // Add the item to db
          const item = new UrlShorten(itemToBeSaved);
          await item.save();
          // Add the item to cache
          cache.addToCache('originalUrl', JSON.stringify(queryOptions), itemToBeSaved);
          res.status(200).json(itemToBeSaved);
        }
      } catch (err) {
        res.status(401).json('Invalid User Id');
      }
    } else {
      return res.status(401).json('Invalid Original Url.');
    }
  });
};
