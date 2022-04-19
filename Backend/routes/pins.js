//https://www.bezkoder.com/node-js-express-sequelize-mysql/

var express = require("express");
var pins = require("../controller/pin.controller");
var router = express.Router();

//https://www.bezkoder.com/node-js-express-sequelize-mysql/
// Add a new pin to the DB
router.post("/", pins.create);
// Get all pins
router.get("/", pins.findAll);
// Get one pin using num
router.get("/:num", pins.findOne);
// update pin info using num
router.put("/:num", pins.update);
// delete specific user using num
router.delete("/:num", pins.delete);

module.exports = router;
