import Waiters from '../models/Waiters';

class WaitersController {
  async index(req, res) {
    const response = await Waiters.findAll();

    return res.json(response);
  }

  async store(req, res) {
    const { id, name } = await Waiters.create(req.body);

    return res.json({
      id,
      name,
    });
  }
}

export default new WaitersController();
