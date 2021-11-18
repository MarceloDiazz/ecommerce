const User = require("../models/Users");
const Product = require("../models/Products");
const History = require("../models/History");

class AdminService {
    static async getUsers(id) {
        try {
            const user = await User.find({_id: {$ne: id}});

            return { error: false, data: user };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async deleteUsers(id) {
        try {
            const user = await User.findOneAndUpdate({ _id: id }, { $set: { state: false } }, { new: true });

            return { error: false, data: user };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async promoteOrDescendAdmin(id, admin) {
        try {
            const user = await User.findOneAndUpdate(
                {_id: id},
                {
                    $set: {
                        admin: !admin,
                    },
                },
                { new: true }
            );

            return { error: false, data: user };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async getAllHistory() {
        try {
            const user = await History.find({}).populate("user product._id");

            return { error: false, data: user };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async getHistoryByUser(id) {
        try {
            const user = await History.find({ user: id }).populate("user product._id");

            return { error: false, data: user };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async getHistoryByProduct(id) {
        try {
            const user = await History.find({ "product._id": id }).populate("user product._id");

            return { error: false, data: user };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async getHistoryById(historyId) {
        try {
            const history = await History.find({ _id: historyId }).populate("user product._id");

            return { error: false, data: history };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async createProduct(body) {
        try {
            const product = await Product.create(body);

            return { error: false, data: product };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async deleteProduct(id) {
        try {
            const product = await Product.findByIdAndUpdate(id, { $set: { state: false } });

            return { error: false, data: product };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async editProduct(id, body) {
        try {
            const product = await Product.findByIdAndUpdate(
                id,
                {
                    $set: {
                        title: body.title,
                        price: body.price,
                        description: body.description,
                        stock: body.stock,
                        category: body.category,
                        location: body.location,
                    },
                },
                { new: true }
            );

            return { error: false, data: product };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async deleteCategory(name) {
        try {
            const product = await Product.updateMany(
                { category: name },
                {
                    $pull: {
                        category: name,
                    },
                },
                { new: true }
            );

            return { error: false, data: product };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async editCategory(name, body) {
        try {
            const product = await Product.updateMany(
                { category: name },
                {
                    $set: {
                        "category.$[name]": body.name,
                    },
                },
                { arrayFilters: [{ name: name }], new: true }
            );

            return { error: false, data: product };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }
}

module.exports = AdminService;
