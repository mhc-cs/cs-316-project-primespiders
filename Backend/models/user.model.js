module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
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
    });
    return User;
  };