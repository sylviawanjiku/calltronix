'use strict';
module.exports = (sequelize, DataTypes) => {
  const Source = sequelize.define('Source', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    sourceName: {
      unique: true,
      type: DataTypes.STRING
    },
  }, {});
  Source.associate = function(models) {
    // associations can be defined here
    Source.hasMany(models.Transaction, {
    });
  };
  return Source;
};