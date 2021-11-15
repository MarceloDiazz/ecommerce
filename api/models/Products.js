const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    stock: {
        type: Number,
        default: 50,
    },
    img: {
        type: String,
    },
    category: [
        {
            type: String,
            required: true,
        },
    ],
    location: [
        {
            city: { type: String, required: true },
            provincia: { type: String, required: true },
        },
    ],
    state: {
        type: Boolean,
        default: true,
    },
    rating: [
        {
            type: Number,
        },
    ],
    comments: [
        {
            type: String,
        },
    ],
    historial: [{ type: Schema.Types.ObjectId, ref: "History" }],
});

module.exports = model("Product", ProductSchema);
// mongoose lo que hace automaticamente lo pasa a minuscula y lo trasforma en plural
