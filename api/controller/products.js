const ProductsService = require("../services/products");

class ProductsController {
    static async allProducts(req, res) {
        const { error, data } = await ProductsService.allProducts();

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async createProduct(req, res) {
        const { error, data } = await ProductsService.createProduct(req.body);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async getProductById(req, res) {
        const { error, data } = await ProductsService.getProductById(req.params.productId);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async deleteProduct(req, res) {
        const { error, data } = await ProductsService.deleteProduct(req.params.productId);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async editProduct(req, res) {
        const { error, data } = await ProductsService.editProduct(req.params.productId, req.body);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async getProductsByCategoryName(req, res) {
        const { error, data } = await ProductsService.getProductsByCategoryName(req.params.name);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async getProductsByCityName(req, res) {
        const { error, data } = await ProductsService.getProductsByCityName(req.params.name);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async getProductsByProvinceName(req, res) {
        const { error, data } = await ProductsService.getProductsByProvinceName(req.params.name);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }
    
    static async getProductsByTitleName(req, res) {
        const { error, data } = await ProductsService.getProductsByTitleName(req.params.name);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }
}

module.exports = ProductsController;
