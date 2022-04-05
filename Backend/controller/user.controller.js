//https://www.bezkoder.com/node-js-express-sequelize-mysql/
var db = require("../models/index");
var User = db.users;
var Op = db.Sequelize.Op;
// Add a new user to the database.
exports.create = (req, res, next) => {
    if (!req.body.num) {
        res.status(400).send({
          message: "Must include parameters!"
        });
        return;
    }
    // create a user to add
    var userToAdd = {
      username: req.body.username,
      password: req.body.password,
      bioIndex: req.body.bioIndex
    };
    User.create(userToAdd)
        .then(data => {res.send(data)})
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Could not add user"
            })
        })
};

// Get all users from the database.
exports.findAll = (req, res, next) => {
    User.findAll()
        .then(data => {res.send(data)})
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Could not retrieve users"
            })
        })
};

// Get one user from the database.
exports.findOne = (req, res) => {
    var username = req.params.username;
    User.findByPk(username)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find User with username=${username}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User with username=" + username
        });
      });
  };

  exports.update = (req, res) => {
    var username = req.params.username;
    User.update(req.body, {
      where: { username: username }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User info was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User with username=${username}. Maybe User was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with username=" + username
        });
      });
  };

  exports.delete = (req, res) => {
    const username = req.params.username;
    User.destroy({
      where: { username: username }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User with username=${username}. Maybe User was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with username=" + username
        });
      });
  };


