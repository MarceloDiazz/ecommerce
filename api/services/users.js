const User = require("../models/Users");
const bcrypt = require("bcrypt");
const joi = require('../config/joi')

class UserServices {
    static async updateUser(id, body) {
        
        try {
            const { error, value } = joi.validate({ password: body.password, name: body.name });

            if (!error) {
                const user = await User.findByIdAndUpdate(
                    id,
                    {
                        $set: {
                            name: body.name,
                            email: body.email,
                            password: body.password && bcrypt.hashSync(body.password, 10),
                        },
                    },
                    { new: true }
                ).select({ password: 0 });

                return { error: false, data: user };
            }

            return { error: true, data: error };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async getUsers() {
        try {
            const user = await User.find({}).select({ password: 0 });

            return { error: false, data: user };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async deleteUsers(id) {
        try {
            const user = await User.findOneAndUpdate({ _id: id }, { $set: { state: false } }, { new: true }).select({
                password: 0,
            });

            return { error: false, data: user };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async promoteOrDescendAdmin(id, admin) {
        try {
            const user = await User.findByIdAndUpdate(
                id,
                {
                    $set: {
                        admin: !admin,
                    },
                },
                { new: true }
            ).select({ password: 0 });

            return { error: false, data: user };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async addProductToBasket(id, body) {
        try {
            const user = await User.findByIdAndUpdate(
                id,
                {
                    $push: {
                        carrito: body.product,
                    },
                },
                { new: true }
            ).select({ password: 0 });

            return { error: false, data: user };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async deleteProductOnBasket(id, productId) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: id },
                {
                    $pull: {
                        carrito: { _id: productId },
                    },
                },
                { new: true }
            ).select({ password: 0 });

            return { error: false, data: user };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async updateProductOnBasket(id, productId, body) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: id },
                {
                    $set: {
                        "carrito.$[product].cantidad": body.cantidad,
                    },
                },
                {
                    arrayFilters: [{ "product._id": productId }],
                    new: true,
                }
            ).select({ password: 0 });

            return { error: false, data: user };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }
}

module.exports = UserServices;
