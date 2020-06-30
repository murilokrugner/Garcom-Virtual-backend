import Drinks from '../models/Drinks';

class DrinksController {
  async index(req, res) {
    const response = await Drinks.findAll();

    return res.json(response);
  }

  async store(req, res) {
    const { id, name, price } = await Drinks.create(req.body);

    return res.json({
      id,
      name,
      price,
    });
  }
}

export default new DrinksController();
