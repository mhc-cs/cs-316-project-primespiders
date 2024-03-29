/*
Functions to allow the site to interact with the pins data table (create, read, update and delete pins)
author: M Klein
reference: https://www.bezkoder.com/node-js-express-sequelize-mysql/
*/

var db = require("../models/index");
var Pin = db.pins;
var Op = db.Sequelize.Op;
// Add a new pin to the database.
exports.create = (req, res, next) => {
    if (!req.body.num || !req.body.account) {
        res.status(400).send({
          message: "Must include parameters!"
        });
        return;
    }
    // create a pin to add
    var pinToAdd = {
      account: req.body.account,
      num: req.body.num
    };
    //add pin to db
    Pin.create(pinToAdd)
        .then(data => {res.send(data)})
        .catch(err => {
            //report if there is an error
            res.status(500).send({
                message:
                    err.message || "Could not add pin"
            })
        })
};

// Get all pins from the database.
exports.findAll = (req, res, next) => {
    Pin.findAll()
        .then(data => {res.send(data)})
        .catch(err => {
            //report if there is an error
            res.status(500).send({
                message:
                    err.message || "Could not retrieve pins"
            })
        })
};

// Get one pin from the database by num.
exports.findOne = (req, res) => {
    var num = req.params.num;
    Pin.findByPk(num)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          //report if pin doesn't exist
          res.status(404).send({
            message: `Cannot find Pin with num=${num}.`
          });
        }
      })
      .catch(err => {
        //report if there is an error
        res.status(500).send({
          message: "Error retrieving Pin with num=" + num
        });
      });
  };

  // Update one pin from the database by num.
  exports.update = (req, res) => {
    var num = req.params.num;
    Pin.update(req.body, {
      where: { num: num }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Pin info was updated successfully."
          });
        } else {
          //report if there is an error
          res.send({
            message: `Cannot update Pin with num=${num}. Maybe Pin was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        //report if there is an error
        res.status(500).send({
          message: "Error updating Pin with num=" + num
        });
      });
  };

  // Delete one pin from the database by num.
  exports.delete = (req, res) => {
    var num = req.params.num;
    Pin.destroy({
      where: { num: num }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Pin was deleted successfully!"
          });
        } else {
          //report if there is an error
          res.send({
            message: `Cannot delete Pin with num=${num}. Maybe Pin was not found!`
          });
        }
      })
      .catch(err => {
        //report if there is an error
        res.status(500).send({
          message: "Could not delete Pin with num=" + num
        });
      });
  };

