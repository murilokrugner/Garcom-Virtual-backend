import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Waiters from '../app/models/Waiters';
import Tables from '../app/models/Tables';
import Plates from '../app/models/Plates';
import Drinks from '../app/models/Drinks';
import Order from '../app/models/Order';

const models = [Waiters, Tables, Plates, Drinks, Order];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      // associando model user com model file
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
