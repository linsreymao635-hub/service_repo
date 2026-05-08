import userRepository from "../Repository/UserRepository.js";
import User from "../Models/User.js";

class UserService {

    async getUsers(callback) {
        try {
            await userRepository.getAllUsers(callback);
        } catch (error) {
            callback(error);
        }
    }

    async addUser(data, callback) {

        // Business Logic Example
        if (!data.name || !data.email) {
            return callback("Name and Email are required");
        }

        const user = new User(
            null,
            data.name,
            data.email
        );

        try {
            await userRepository.createUser(user, callback);
        } catch (error) {
            callback(error);
        }
    }
}

export default new UserService();