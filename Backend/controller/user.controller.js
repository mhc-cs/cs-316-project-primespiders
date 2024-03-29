/*
Functions to allow the site to interact with the pins data table (create, read, update and delete pins)
author: M Klein
reference: https://www.bezkoder.com/node-js-express-sequelize-mysql/
*/
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
    //add user to db
    User.create(userToAdd)
        .then(data => {res.send(data)})
        .catch(err => {
            //report if there is an error
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
            //report if there is an error
            res.status(500).send({
                message:
                    err.message || "Could not retrieve users"
            })
        })
};

// Get one user from the database by email
exports.findOne = (req, res) => {
    var email = req.params.email;
    User.findByPk(email)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          //report if user doesn't exist
          res.status(404).send({
            message: `Cannot find User with email=${email}.`
          });
        }
      })
      .catch(err => {
        //report if there is an error
        res.status(500).send({
          message: "Error retrieving User with email=" + email
        });
      });
  };

  //Update one user from the database by email
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
          //report if there is an error
          res.send({
            message: `Cannot update User with email=${email}. Maybe User was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        //report if there is an error
        res.status(500).send({
          message: "Error updating User with email=" + email
        });
      });
  };

  //Delete one user from the database by email
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
          //report if there is an error
          res.send({
            message: `Cannot delete User with email=${email}. Maybe User was not found!`
          });
        }
      })
      .catch(err => {
        //report if there is an error
        res.status(500).send({
          message: "Could not delete User with email=" + email
        });
      });
  };




// // Determine if the user is authentic by comparing password
exports.authenticate = (req, res, next) => {
  //user and password from request body
  var email = req.body.email;
  var password = req.body.password;
  //find the account with this email
  User.findByPk(email)
    .then(async (response) => {
      //if there is an account with this email
      if (response) {
        //compare passwords and return the result
        if(response.dataValues.password && await response.validPassword(password, response.dataValues.password)){
          res.send(true);
        }
        else{
          res.send(false);
        }
      } 
      else {
        res.send(false);
      }
    })
    .catch(err => {
      //report if there is an error
      res.status(500).send({
        message: "Error retrieving User with email=" + email
      });
    });
};