/*
Create the bios table in the database each bio stores bio, name, location, expertise, contact, and image
author: M Klein
reference: https://sequelize.org/v4/manual/tutorial/models-definition.html
*/
module.exports = (sequelize, Sequelize) => {
    const Bio = sequelize.define("bio", {
      bio: {
        //input may be long, 5000 character limit
        type: Sequelize.STRING(5000)
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
        //input may be long, 5000 character limit
        type: Sequelize.STRING(5000)
      }
    });
    return Bio;
  };
