/*
Import host, user, password and db information from .env file to login to DB
author: M Klein
reference: https://www.bezkoder.com/node-js-express-sequelize-mysql/
https://forum.codeselfstudy.com/t/tutorial-how-to-use-mysql-or-mariadb-with-node-js-and-express/2260
*/
require('dotenv').config()
module.exports = {
    HOST: process.env.MYSQL_HOST,
    USER: process.env.MYSQL_USER,
    PASSWORD: process.env.MYSQL_PASSWORD,
    DB: process.env.MYSQL_DB,
    dialect: "mysql"
  };

