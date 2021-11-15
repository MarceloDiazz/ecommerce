const Product = require("../models/Products");

class ProductsService {
    static async allProducts() {
        try {
            const products = await Product.find({state: true});

            return { error: false, data: products };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async getProductById(id) {
        try {
            const product = await Product.findById(id);

            return { error: false, data: product };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }  

    static async getProductsByCategoryName(name) {
        try {
            const product = await Product.find({category: {$regex: name, $options: 'i'}})
        
            return { error: false, data: product };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async getProductsByCityName(name) {
        try {
            const product = await Product.find({'location.city': {$regex: name, $options: 'i'}})

            return { error: false, data: product };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async getProductsByProvinceName(name) {
        try {
            const product = await Product.find({'location.provincia': {$regex: name, $options: 'i'}})

            return { error: false, data: product };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }
    
    static async getProductsByTitleName(name) {
        try {
            const product = await Product.find({title: {$regex: name, $options: 'i'}})

            return { error: false, data: product };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }
}

module.exports = ProductsService;
