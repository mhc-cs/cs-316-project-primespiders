module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      num: {
        type: Sequelize.STRING
      }
    });
    return User;
  };