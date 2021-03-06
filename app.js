const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const filter = require("./api/filter");

app.use(bodyParser.json());
app.use((err, req, res, next) => {
  // If status code is 400 - return error object
  if (err.status === 400)
    return res
      .status(err.status)
      .send({ error: "Could not decode request: JSON parsing failed" });
  return next(err);
});

app.use("/", filter);

module.exports = app;
