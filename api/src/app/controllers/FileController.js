import File from '../schemas/File';

class FileController {
  async index(req, res) {
    const files = await File.find();

    return res.json(files);
  }

  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
      url: `http://localhost:3333/files/${path}`,
    });

    return res.json(file);
  }
}

export default new FileController();
