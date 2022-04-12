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