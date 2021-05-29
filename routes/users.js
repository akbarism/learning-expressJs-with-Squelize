var express = require("express");
var router = express.Router();
const controller = require("../controllers/userController");

// GET users listing.
router.get("/", controller.allUser);
// GET USER BY ID
router.get("/:id/view", controller.viewUser);
// POST users
router.post("/", controller.insertUser);
// UPDATE users
router.patch("/:id", function (req, res, next) {});
// DELETE users
router.post("/:id/delete", controller.deleteUser);

module.exports = router;
