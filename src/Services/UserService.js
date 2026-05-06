// UserService.js
const userRepo = require('../repository/UserRepository');

exports.getUsers = async () => {
  return await userRepo.findAll();
};