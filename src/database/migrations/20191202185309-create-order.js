module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      amount_plates: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      amount_drinks: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      waiter_id: {
        type: Sequelize.INTEGER,
        references: { model: 'waiters', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      table_id: {
        type: Sequelize.INTEGER,
        references: { model: 'tables', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      plates_id: {
        type: Sequelize.INTEGER,
        references: { model: 'plates', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      drinks_id: {
        type: Sequelize.INTEGER,
        references: { model: 'drinks', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('orders');
  },
};
