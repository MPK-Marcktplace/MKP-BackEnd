'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('requests', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        foreygnKey: true,
        allowNull: false
      },
      product_id: {
        type: Sequelize.INTEGER,
        foreygnKey: true,
        allowNull: false
      },
      department_id: {
        type: Sequelize.INTEGER,
        foreygnKey: true,
        allowNull: false
      },
      partner_id: {
        type: Sequelize.INTEGER,
        foreygnKey: true,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      update_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    })

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('requests');
  }
};