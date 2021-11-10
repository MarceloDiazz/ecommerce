const AuthService = require("../services/auth");

class AuthController {
    static async createUser(req, res) {
        const { error, data } = await AuthService.createUser(req.body);

        if (error) return res.status(data.status || 500).json({ message: data.message });

        res.status(201).json(data);
    }

    static async loginUser(req, res) {
        res.json(req.user);
    }

    static async logoutUser(req, res) {
        req.logout()
        res.sendStatus(200)
    }

    static async findMyUser(req, res) {
        !req.user ? res.sendStatus(401) : res.send(req.user);
    }
}

module.exports = AuthController;