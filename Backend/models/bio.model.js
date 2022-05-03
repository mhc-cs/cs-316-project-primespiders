/*
Create the bios table in the database each bio stores bio, name, location, expertise, contact, and image 
author: M Klein
*/
module.exports = (sequelize, Sequelize) => {
    const Bio = sequelize.define("bio", {
      bio: {
        type: Sequelize.STRING(2000)
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
        type: Sequelize.STRING(2000)
      }
    });
    return Bio;
  };