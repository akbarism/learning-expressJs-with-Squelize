var express = require("express");
var router = express.Router();
const user = require("./users");
const product = require("./product");
/* GET home page. */
router
  .use("/users", user)
  .use("/product", product)
  .get("/", function (req, res, next) {
    res.render("index", { title: "YNTKS" });
  });

module.exports = router;
