//https://www.bezkoder.com/node-js-express-sequelize-mysql/

var express = require("express");
var users = require("../controller/user.controller");
/*
Express routes for finding all users, finding a specfici user, updating a user, adding a user, deleting a user.
reference: //https://www.bezkoder.com/node-js-express-sequelize-mysql/
*/

var router = express.Router();

// Add a new user to the DB
router.post("/", users.create);
// Get all users
router.get("/", users.findAll);
// Get one user using email
router.get("/:email", users.findOne);
// update user info using email
router.put("/update/:email", users.update);
// delete specific user using email
router.delete("/:email", users.delete);
// authenticate email using user and pass
router.put("/authenticate", users.authenticate);

module.exports = router;

