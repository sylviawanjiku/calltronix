'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    clientName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    mobileNo: {
      allowNull: false,
      type: DataTypes.BIGINT
    },
    contactType: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {});
  Client.associate = function(models) {
    // associations can be defined here
    Client.hasMany(models.Transaction, {
    });
  };
  return Client;
};