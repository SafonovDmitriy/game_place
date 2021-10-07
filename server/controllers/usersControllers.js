const { User } = require("../models");

const Token = require("../utils/Token");

class UserController {
  async getUser(req, res) {
    const { _id } = req.body;
    const user = await User.findById(_id);

    const _user = {
      email: user.email,
      name: user.name,
      surname: user.surname,
      role: user.role,
      photo: user.photo,
      balance: user.balance,
    };
    res.status(200).json({ user: _user });
  }
}

module.exports = new UserController();
