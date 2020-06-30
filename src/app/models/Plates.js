import Sequelize, { Model } from 'sequelize';

class Plates extends Model {
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

export default Plates;
