/*
Create the pins table in the database each bio stores pin account type and number
author: M Klein
reference: https://sequelize.org/v4/manual/tutorial/models-definition.html
*/
module.exports = (sequelize, Sequelize) => {
    const Pin = sequelize.define("pin", {
      account: {
        type: Sequelize.STRING
      },
      num: {
        //use the pin number as the primary key, should be unique
        type: Sequelize.INTEGER,
        primaryKey: true
      }
    });
    return Pin;
  };