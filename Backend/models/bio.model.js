module.exports = (sequelize, Sequelize) => {
    const Bio = sequelize.define("bio", {
      bio: {
        type: Sequelize.STRING
      }
    });
    return Bio;
  };