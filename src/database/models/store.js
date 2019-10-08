'use strict';
module.exports = (sequelize, DataTypes) => {
  const Store = sequelize.define('Store', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    storeName: {
      unique: true,
      type: DataTypes.STRING
    },
  }, {});
  Store.associate = function(models) {
    // associations can be defined here
    Store.hasMany(models.Transaction, {
    });
  };
  return Store;
};