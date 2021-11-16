'use strict';

const { INTEGER } = require("sequelize/types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * 
     */
     await queryInterface.createTable('superpowers_to_superheroes', { 
       superheroId: {
         type: Sequelize.INTEGER,
         allowNull: false,
         field: "superhero_id",
         references: {
          model: {
            tableName: 'superheros'
          }
         },
         onDelete: 'cascade'
       },
       superpowerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "superpower_id",
        references: {
          model: {
            tableName: 'superpowers'
          }
        },
        onDelete: 'cascade'
       }
       
      });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * 
     */
     await queryInterface.dropTable('superpowers_to_superheroes');
  }
};
