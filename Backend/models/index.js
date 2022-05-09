/*
Configure the database by connecting to MariaDB and setting up Sequelize models
author: M Klein
reference: https://www.bezkoder.com/node-js-express-sequelize-mysql/
*/
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
//connect to the MariaDB database
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
//each data table corresponds to a sequelize model 
db.users = require("./user.model.js")(sequelize, Sequelize);
db.bios = require("./bio.model.js")(sequelize, Sequelize);
db.pins = require("./pin.model.js")(sequelize, Sequelize);
module.exports = db;