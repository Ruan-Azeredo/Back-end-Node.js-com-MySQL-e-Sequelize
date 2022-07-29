'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true, //caracteristica de variavel contadora
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('users');

  }
};
