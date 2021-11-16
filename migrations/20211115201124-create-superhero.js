'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('superheros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickname: {
        type: Sequelize.STRING(128)
      },
      realname: {
        type: Sequelize.STRING(128),
        field: "real_name"
      },
      origindescription: {
        type: Sequelize.STRING(528),
        field: "origin_description"
      },
      catchphrase: {
        type: Sequelize.STRING(1024),
        field: "catch_phrase"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at"
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at"
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('superheros');
  }
};