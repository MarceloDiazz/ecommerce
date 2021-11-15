const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

const User = require("../models/Users");
const Product = require("../models/Products");
const History = require("../models/History");

const joi = require("../config/joi");
const transporter = require("../config/mailer");

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
                );

                return { error: false, data: user };
            }

            return { error: true, data: error };
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
                        carrito: body,
                    },
                },
                { new: true }
            );

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
                        carrito: { productId: productId },
                    },
                },
                { new: true }
            );

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
            );

            return { error: false, data: user };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async confirmBasket(id, usuario) {
        try {
            const carrito = usuario[0].carrito;

            const newHistory = new History({
                user: { _id: id },
                product: carrito,
                total: 10,
            });

            const savedHistory = await newHistory.save();

            const user = await User.findOneAndUpdate(
                { _id: id },
                { $push: { historial: savedHistory._id }, $set: { carrito: [] } },
                { new: true }
            );

            const product = await Product.updateMany(
                { _id: { $in: carrito } },
                { $push: { historial: savedHistory._id } },
                { new: true }
            );

            const history = await savedHistory.populate("product._id", {
                title: 1,
                price: 1,
                cantidad: 1,
                _id: 0,
            });

            await transporter.sendMail(
                {
                    from: `"Adventure" <${process.env.NODEMAILER_EMAIL}>"`,
                    to: user.email,
                    subject: "Order confirmation",
                    html: `
                        <p>Username: ${user.name}</p>
                        <p>Purchase: ${history.product.map((product) => {
                            return `<ul>
                                    <li>product: ${product._id.title}</li>
                                    <li>price: ${product._id.price}</li>
                                    <li>cantidad: ${product.cantidad}</li>
                                    </ul>`;
                        })}</p>
                        <p>Total: 10000</p>
                    `,
                },
                (err, info) => {
                    console.log(info.envelope);
                    console.log(info.messageId);
                }
            );

            return { error: false, data: history };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }
}

module.exports = UserServices;
