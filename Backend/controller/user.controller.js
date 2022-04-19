//https://www.bezkoder.com/node-js-express-sequelize-mysql/
var db = require("../models/index");
var User = db.users;
var Op = db.Sequelize.Op;
// Add a new user to the database.
exports.create = (req, res, next) => {
    if (!req.body.email) {
        res.status(400).send({
          message: "Must include parameters!"
        });
        return;
    }
    // create a user to add
    var userToAdd = {
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      accountType: req.body.accountType,
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
    var email = req.params.email;
    User.findByPk(email)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find User with email=${email}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User with email=" + email
        });
      });
  };

  exports.update = (req, res) => {
    var email = req.params.email;
    User.update(req.body, {
      where: { email: email }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User info was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User with email=${email}. Maybe User was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with email=" + email
        });
      });
  };

  exports.delete = (req, res) => {
    const email = req.params.email;
    User.destroy({
      where: { email: email }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User with email=${email}. Maybe User was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with email=" + email
        });
      });
  };


// Get if the user is authentic
// exports.Authenticate = (req, res) => {
//   var email = req.body.email;
//   var password = req.body.password;
//   User.findByPk(email)
//     .then(data => {
//       if (data) {
//         if(data.password){
//           console.log(data.password)
//           if(data.password === password) res.send("authenticated");
//         }
//         console.log("testttt")
//       } else {
//         res.status(404).send({
//           message: `Cannot find User with email=${email}.`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error retrieving User with email=" + email
//       });
//     });
// };