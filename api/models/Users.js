const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const findOrCreate = require("mongoose-findorcreate");

const UserSchema = new Schema({
    name: String,

    email: String,

    password: String,

    admin: {
        type: Boolean,
        default: false,
    },

    state: {
        type: Boolean,
        default: true,
    },

    carrito: [
        {
            _id: { type: Schema.Types.ObjectId, ref: "Product" },
            cantidad: { type: Number, default: 1 },
        },
    ],

    historial: [{ type: Schema.Types.ObjectId, ref: "History" }],

    facebookId: String,

    googleId: String,

    githubId: String,
});

UserSchema.pre("save", async function (next) {
    if (this.password) {
        const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;
    }
    next();
});

UserSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        delete returnedObject.__v;
        delete returnedObject.password;
    },
});

UserSchema.plugin(findOrCreate);

module.exports = model("User", UserSchema);
