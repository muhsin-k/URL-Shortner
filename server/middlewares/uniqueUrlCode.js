const shortid = require("shortid");
module.exports = {
  generate: function() {
    return shortid.generate();
  }
};
