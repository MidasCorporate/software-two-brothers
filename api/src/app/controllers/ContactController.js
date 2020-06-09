import Contact from '../schemas/Contact';

class ContactController {
  async index(req, res) {
    const contacts = await Contact.find();

    return res.json(contacts);
  }

  async store(req, res) {
    const { name, email, cel, tel, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      cel,
      tel,
      message,
    });

    return res.json(contact);
  }
}

export default new ContactController();
