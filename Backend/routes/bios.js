/*
Express routes for finding all bios, finding a specfici bio, updating a bio, adding a bio, deleting a bio.
reference: //https://www.bezkoder.com/node-js-express-sequelize-mysql/
*/

var express = require("express");
var bios = require("../controller/bio.controller");
var router = express.Router();

// Add a new bio to the DB
router.post("/", bios.create);
// Get all bios
router.get("/", bios.findAll);
// Get all bios matching filter
router.get("/filter/:expertise", bios.findFiltered);
// Get one bio using id
router.get("/:id", bios.findOne);
// update bio info using id
router.put("/:id", bios.update);
// delete specific bio using id
router.delete("/:id", bios.delete);

module.exports = router;
