'use strict';

const sequelize = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('type_users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      userType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },     
      updated_at :{
        type: Sequelize.DATE,
        allowNull: false,
      },  
  })
},

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('type_users');
  },
};
