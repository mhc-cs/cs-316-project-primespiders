module.exports = (sequelize, Sequelize) => {
    const Bio = sequelize.define("bio", {
      bio: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      expertise: {
        type: Sequelize.STRING
      },
      contact: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      }
    });
    return Bio;
  };