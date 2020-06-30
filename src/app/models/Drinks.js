import Sequelize, { Model } from 'sequelize';

class Drinks extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        price: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Drinks;
