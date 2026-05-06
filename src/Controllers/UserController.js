import userModel from '../Models/User.js';
import { BaseController } from './BaseController.js';

const BaseController = require('./BaseController');
const userService = require('../services/UserService');

export class UserController extends BaseController {
  async getUsers(req, res) {
    try {
      const users = await userService.getUsers();
      this.sendResponse(res, users);
    } catch (error) {
      this.sendError(res, error);
    }
  }

  async createUser(req, res) {
    try {
      const user = await userService.createUser(req.body);
      this.sendResponse(res, user, 'User created');
    } catch (error) {
      this.sendError(res, error);
    }
  }

  async updateUser(req, res) {
    try {
      const user = await userService.updateUser(req.params.id, req.body);
      this.sendResponse(res, user, 'User updated');
    } catch (error) {
      this.sendError(res, error);
    }
  }

  async deleteUser(req, res) {
    try {
      const user = await userService.deleteUser(req.params.id);
      this.sendResponse(res, user, 'User deleted');
    } catch (error) {
      this.sendError(res, error);
    }
  }
}

module.exports = new UserController();