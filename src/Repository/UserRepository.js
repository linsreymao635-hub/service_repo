import db from "../config/db.js";

class UserRepository {

    async getAllUsers(callback) {

        const sql = "SELECT * FROM users";

        try {
            const [results] = await db.query(sql);
            callback(null, results);
        } catch (error) {
            callback(error);
        }
    }

    async createUser(user, callback) {

        const sql =
            "INSERT INTO users(name, email) VALUES (?, ?)";

        try {
            const [result] = await db.query(sql, [user.name, user.email]);
            callback(null, result);
        } catch (error) {
            callback(error);
        }
    }
}

export default new UserRepository();