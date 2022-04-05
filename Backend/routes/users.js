//https://www.bezkoder.com/node-js-express-sequelize-mysql/

var express = require("express");
var users = require("../controller/user.controller");
var router = express.Router();

//https://www.bezkoder.com/node-js-express-sequelize-mysql/
// Add a new user to the DB
router.post("/", users.create);
// Get all users
router.get("/", users.findAll);
// Get one user using username
router.get("/:username", users.findOne);
// update user info using username
router.put("/:username", users.update);
// delete specific user using username
router.delete("/:username", users.delete);

module.exports = router;

