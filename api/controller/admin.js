const AdminService = require("../services/admin");

class AdminController {
    static async getUsers(req, res) {
        const { error, data } = await AdminService.getUsers(req.params.userId);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async deleteUsers(req, res) {
        const { error, data } = await AdminService.deleteUsers(req.params.userId);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async promoteOrDescendAdmin(req, res) {
        const { error, data } = await AdminService.promoteOrDescendAdmin(req.params.userId, req.body.admin);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async getAllHistory(req, res) {
        const { error, data } = await AdminService.getAllHistory();

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async getHistoryByUser(req, res) {
        const { error, data } = await AdminService.getHistoryByUser(req.params.userId);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async getHistoryByProduct(req, res) {
        const { error, data } = await AdminService.getHistoryByProduct(req.params.productId);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async getHistoryById(req, res) {
        const { error, data } = await AdminService.getHistoryById(req.params.historyId);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async createProduct(req, res) {
        const { error, data } = await AdminService.createProduct(req.body);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async deleteProduct(req, res) {
        const { error, data } = await AdminService.deleteProduct(req.params.productId);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async editProduct(req, res) {
        const { error, data } = await AdminService.editProduct(req.params.productId, req.body);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async deleteCategory(req, res) {
        const { error, data } = await AdminService.deleteCategory(req.params.name);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async editCategory(req, res) {
        const { error, data } = await AdminService.editCategory(req.params.name, req.body);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }
}

module.exports = AdminController;
