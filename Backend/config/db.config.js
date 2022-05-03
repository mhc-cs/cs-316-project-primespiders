/*
Import host, user, password and db information from .env file to login to DB
author: M Klein
reference: https://www.bezkoder.com/react-node-express-mysql/
*/
require('dotenv').config()
module.exports = {
    HOST: process.env.MYSQL_HOST,
    USER: process.env.MYSQL_USER,
    PASSWORD: process.env.MYSQL_PASSWORD,
    DB: process.env.MYSQL_DB,
    dialect: "mysql"
  };

