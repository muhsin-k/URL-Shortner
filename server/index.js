const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const constants = require('./config/constants');

//Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.set('debug', true);
mongoose.connect(
  constants.mongoURI,
  {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useMongoClient: true,
  },
);

require('./models/UrlShorten');
const app = express();

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,x-access-token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});
require('./routes/urlshorten')(app);

require('./services/cache');
const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server started on port`, PORT);
});
