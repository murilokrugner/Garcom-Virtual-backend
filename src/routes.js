import { Router } from 'express';

import WaitersController from './app/controllers/WaitersController';
import TablesController from './app/controllers/TablesController';
import PlatesController from './app/controllers/PlatesController';
import DrinksController from './app/controllers/DrinksController';
import OrderController from './app/controllers/OrderController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ certo: 'Bem vindo!' });
});

routes.get('/waiters', WaitersController.index);

routes.post('/waiters', WaitersController.store);

routes.get('/tables', TablesController.index);

routes.post('/tables', TablesController.store);

routes.get('/plates', PlatesController.index);

routes.post('/plates', PlatesController.store);

routes.get('/drinks', DrinksController.index);

routes.post('/drinks', DrinksController.store);

routes.get('/order', OrderController.index);

routes.post('/order', OrderController.store);

export default routes;
