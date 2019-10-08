'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    ticketID: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    clientId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    sourceId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    storeId:{
      allowNull: true,
      type: DataTypes.INTEGER
    },
    questionType: {
      allowNull: false,
      type: DataTypes.STRING
    }, 
    questionSubType: {
      allowNull: false,
      type: DataTypes.STRING
    },
    dispositionName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    dateCreated: {
      allowNull: false,
      type: DataTypes.DATE
    },

  }, {});
  Transaction.associate = function(models) {
    // associations can be defined here
    Transaction.belongsTo(models.Store, {
      foreignKey: 'storeId',
      as: 'store',
      targetKey: 'id'
    });
    Transaction.belongsTo(models.Source, {
      foreignKey: 'sourceId',
      as: 'source',
      targetKey: 'id'
    });
    Transaction.belongsTo(models.Client, {
      foreignKey: 'clientId',
      as: 'client',
      targetKey: 'id'
    });
  };
  return Transaction;
};