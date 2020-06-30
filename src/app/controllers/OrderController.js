import Order from '../models/Order';

class OrderController {
  async index(req, res) {
    const response = await Order.findAll();

    return res.json(response);
  }

  async store(req, res) {
    const {
      id,
      number,
      waiter_id,
      table_id,
      plates_id,
      drinks_id,
      amount_plates,
      amount_drinks,
    } = await Order.create(req.body);

    return res.json({
      id,
      number,
      waiter_id,
      table_id,
      plates_id,
      drinks_id,
      amount_plates,
      amount_drinks,
    });
  }
}

export default new OrderController();
