'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ticketID: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      clientId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model:'Clients',
          key: 'id',
          onDelete:'CASCADE'
        }
      },
      sourceId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model:'Sources',
          key: 'id',
          onDelete:'CASCADE'
        }
      },
      storeId:{
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model:'Stores',
          key: 'id',
          onDelete:'CASCADE'
        }
      },
      questionType: {
        allowNull: false,
        type: Sequelize.STRING
      }, 
      questionSubType: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      dispositionName: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      dateCreated: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Transactions');
  }
};