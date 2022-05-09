/*
Create the users table in the database each bio stores email, password, account type, bioIndex, first and last name
author: M Klein
reference: https://javascript.plainenglish.io/password-encryption-using-bcrypt-sequelize-and-nodejs-fb9198634ee7
*/
const bcrypt  = require('bcrypt');
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      ////use the pin number as the primary key, should be unique
      email: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      password: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      accountType: {
        type: Sequelize.STRING
      },
      bioIndex: {
        type: Sequelize.INTEGER
      }
    },
      //encrypt passwords upon creation and update
    {
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          //use bcrypt to encrypt password
          const genSalt = await bcrypt.genSaltSync(10, 'b');
          user.password = bcrypt.hashSync(user.password, genSalt);
        }
      },
      beforeUpdate: async (user) => {
        if (user.password) {
          //use bcrypt to encrypt password
          const genSalt = await bcrypt.genSaltSync(10, 'b');
          user.password = bcrypt.hashSync(user.password, genSalt);
        }
      },
    },
    //ability to compare entered password to stored password
    instanceMethods: {
      validPassword: (password) => {
        return bcrypt.compareSync(password, this.password);
      }
    }
  });
    User.prototype.validPassword = async (password, hash) => {
      return await bcrypt.compareSync(password, hash);
    }
    return User;
};