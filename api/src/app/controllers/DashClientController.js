import DashClient from '../schemas/DashClient';
import File from '../schemas/File';

class ContactController {
  async index(req, res) {
    const contacts = await DashClient.find();

    return res.json(contacts);
  }

  async store(req, res) {
    const { id } = req.body;
    const files = await File.find();
    // const CorrectFiles = await files.filter((file) => file.id === id.id);

    const file = id.map((item) => files.find((archive) => archive.id === item));

    // const { _id, url } = docs;
    // const file = {
    //   _id,
    //   url,
    // };

    const listBanner = await DashClient.create({
      file,
    });

    // const { _id, url  } = listBanner

    return res.json(listBanner);
  }
}

export default new ContactController();
