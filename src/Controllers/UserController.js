import userService from "../Services/userService.js";

class UserController {

    async getUsers(req, res) {

        try {
            await userService.getUsers((err, results) => {

                if (err) {
                    return res.status(500).json({
                        message: err
                    });
                }

                res.json(results);
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async createUser(req, res) {

        try {
            await userService.addUser(req.body, (err, result) => {

                if (err) {
                    return res.status(400).json({
                        message: err
                    });
                }

                res.json({
                    message: "User Created",
                    result
                });
            });
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }
}

export default new UserController();