const { User } = require("../models");

const Token = require("../utils/Token");

class UserController {
  async getUser(req, res) {
    console.log(`req`, req);
  }
}

module.exports = new UserController();
