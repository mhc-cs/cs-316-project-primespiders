/*
Create the pins table in the database each bio stores pin account type and number
author: M Klein
*/
module.exports = (sequelize, Sequelize) => {
    const Pin = sequelize.define("pin", {
      account: {
        type: Sequelize.STRING
      },
      num: {
        type: Sequelize.INTEGER,
        primaryKey: true
      }
    });
    return Pin;
  };