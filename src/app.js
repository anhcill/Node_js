const express = require("express");
const morgan = require("morgan");
const app = express();
const helmet = require("helmet");
const compression = require("compression");

// init middleware
app.use(morgan("dev"));
// bao ve trang web ko cho xem lam bang gi
app.use(helmet());
// giam dung luong v
app.use(compression());
// product
// morgan("combined")
// morgan("common")
// morgan("dev")
// morgan("short ")
// morgan("tiny")
app.get("/", (req, res, next) => {
  const strCompans = "halo";
  return res.status(200).json({
    message: "welcome js!",
    metadata: strCompans.repeat(100000),
  });
});
// init db
require("./db/init.mongodb");
// init routes

module.exports = app;
