import Tables from '../models/Tables';

class TablesController {
  async index(req, res) {
    const response = await Tables.findAll();

    return res.json(response);
  }

  async store(req, res) {
    const { id, name } = await Tables.create(req.body);

    return res.json({
      id,
      name,
    });
  }
}

export default new TablesController();
