//https://www.bezkoder.com/node-js-express-sequelize-mysql/
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

// Get one bio from the database.
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
