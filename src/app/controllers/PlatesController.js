import Plates from '../models/Plates';

class PlatesController {
  async index(req, res) {
    const response = await Plates.findAll();

    return res.json(response);
  }

  async store(req, res) {
    const { id, name, price } = await Plates.create(req.body);

    return res.json({
      id,
      name,
      price,
    });
  }
}

export default new PlatesController();
