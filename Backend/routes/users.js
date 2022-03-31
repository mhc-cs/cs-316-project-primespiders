//https://www.bezkoder.com/node-js-express-sequelize-mysql/

var express = require("express");
var users = require("../controller/user.controller");
var router = express.Router();

//https://www.bezkoder.com/node-js-express-sequelize-mysql/
// Add a new user to the DB
router.post("/", users.create);
// Get all users
router.get("/", users.findAll);
// Get one user using id
router.get("/:id", users.findOne);
// update user info using id
router.put("/:id", users.update);
// delete specific user using id
router.delete("/:id", users.delete);

module.exports = router;

