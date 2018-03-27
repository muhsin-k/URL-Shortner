const express = require("express");
const mongoose = require("mongoose");
//Simple cookie-based session middleware
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const keys = require("./config/constants");

//Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});

require("./models/Product");
const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
require("./routes/product")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port`, PORT);
});
