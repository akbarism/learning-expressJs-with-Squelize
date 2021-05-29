var express = require("express");
var router = express.Router();
const controller = require("../controllers/productController");
const { upload } = require("../helpers/upload");

// GET users listing.
router.get("/", controller.allProduct);
// GET USER BY ID
router.get("/:id/view", controller.viewProduct);
// POST users
router.post("/", upload.single("image"), controller.insertProduct);
// UPDATE users
router.patch("/:id", function (req, res, next) {});
// DELETE users
router.post("/:id/delete", controller.deleteProduct);

module.exports = router;
