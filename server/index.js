const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const constants = require("./config/constants");

//Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.set("debug", true);
mongoose.connect(constants.mongoURI, {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});

require("./models/UrlShorten");
const app = express();

app.use(bodyParser.json());

require("./routes/urlshorten")(app);

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server started on port`, PORT);
});
