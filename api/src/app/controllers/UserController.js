import bcrypt from 'bcryptjs';
import User from '../schemas/User';

class UserController {
  async index(req, res) {
    return res.json();
  }

  async store(req, res) {
    const { name, email, password } = req.body;

    const UserExists = await User.findOne({ email });

    if (UserExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const userCreated = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, 8),
    });

    return res.json(userCreated);
  }
}

export default new UserController();
