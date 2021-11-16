const { Schema, model } = require("mongoose");

const HistorySchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    product: [{ _id: { type: Schema.Types.ObjectId, ref: "Product" }, cantidad: Number }],
    total: { type: Number, default: 0 },
    date: { type: Date, default: Date.now },
    complete: {type: Boolean, default: false}
});

module.exports = model('History', HistorySchema);