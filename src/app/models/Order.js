import Sequelize, { Model } from 'sequelize';

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        number: Sequelize.INTEGER,
        amount_plates: Sequelize.INTEGER,
        amount_drinks: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Waiters, { foreignKey: 'waiter_id', as: 'waiter' });
    this.belongsTo(models.Tables, { foreignKey: 'table_id', as: 'table' });
    this.belongsTo(models.Plates, { foreignKey: 'plates_id', as: 'plates' });
    this.belongsTo(models.Drinks, { foreignKey: 'drinks_id', as: 'drinks' });
  }
}

export default Order;
