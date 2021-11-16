const UserServices = require("../services/users");

class UserController {
    static async updateUser(req, res) {
        const { error, data } = await UserServices.updateUser(req.params.userId, req.body);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async getBasket(req, res) {
        const { error, data } = await UserServices.getBasket(req.params.userId);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async addProductToBasket(req, res) {
        const { error, data } = await UserServices.addProductToBasket(req.params.userId, req.body);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async deleteProductOnBasket(req, res) {
        const { error, data } = await UserServices.deleteProductOnBasket(req.params.userId, req.params.productId);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async updateProductOnBasket(req, res) {
        const { error, data } = await UserServices.updateProductOnBasket(req.params.userId, req.params.productId, req.body);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async confirmBasket(req, res) {
        const { error, data } = await UserServices.confirmBasket(req.params.userId, req.user);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async getHistory(req, res) {
        const { error, data } = await UserServices.getHistory(req.params.userId);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

}

module.exports = UserController;
