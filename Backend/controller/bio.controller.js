/*
Functions to allow the site to interact with the bios data table (create, read, update and delete bios)
author: M Klein
reference: https://www.bezkoder.com/react-node-express-mysql/
*/

var db = require("../models/index");
var Bio = db.bios;
var Op = db.Sequelize.Op;
// Add a new bio to the database.
exports.create = (req, res, next) => {
    if (!req.body.bio) {
        res.status(400).send({
          message: "Must include parameters!"
        });
        return;
    }
    // create a bio to add
    var bioToAdd = {
      bio: req.body.bio,
      name: req.body.name,
      location: req.body.location,
      expertise: req.body.expertise,
      contact: req.body.contact,
      image: req.body.image
    };
    Bio.create(bioToAdd)
        .then(data => {res.send(data)})
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Could not add bio"
            })
        })
};

// Get all bios from the database.
exports.findAll = (req, res, next) => {
    Bio.findAll()
        .then(data => {res.send(data)})
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Could not retrieve bios"
            })
        })
};

// Get all bios from the database, filtering by expertise
exports.findFiltered = (req, res, next) => {
  var expertise = req.params.expertise;
  Bio.findAll({where: {expertise: expertise}})
      .then(data => {res.send(data)})
      .catch(err => {
          res.status(500).send({
              message:
                  err.message || "Could not retrieve bios"
          })
      })
};

// Get one bio from the database by ID
exports.findOne = (req, res) => {
    var id = req.params.id;
    Bio.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find bio with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving bio with id=" + id
        });
      });
  };

  // Update one bio from the database by ID
  exports.update = (req, res) => {
    var id = req.params.id;
    Bio.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "bio info was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update bio with id=${id}. Maybe bio was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating bio with id=" + id
        });
      });
  };

  // Delete one bio from the database by ID
  exports.delete = (req, res) => {
    var id = req.params.id;
    Bio.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Bio was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Bio with id=${id}. Maybe Bio was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Bio with id=" + id
        });
      });
  };
