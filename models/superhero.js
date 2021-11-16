'use strict';
const {
  Model
} = require('sequelize');
const superpowers = require('./superpowers');
module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Superhero.belongsToMany(models.Superpower, {through:'superpowers_to_superheroes',foreignKey: "superheroId"})
    }
  };
  Superhero.init({
    nickname:{
      type: DataTypes.STRING
    },
    realname: {
      type: DataTypes.STRING(128),
      field: "real_name"
    },
    origindescription: {
      type: DataTypes.STRING(528),
      field: "origin_description"
    },
    catchphrase: {
      type: DataTypes.STRING(1024),
      field: "catch_phrase"
    }
  }, {
    sequelize,
    modelName: 'Superhero',
    underscored: true,
    tableName: "superheros"
  });
  return Superhero;
};