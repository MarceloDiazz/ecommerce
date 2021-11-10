const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const findOrCreate = require("mongoose-findorcreate");

const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
    },
    email: {
        type: String,
        default: 'asd@asd.com',
    },
    password: {
        type: String,
        default: "",
    },
    admin: {
        type: Boolean,
        default: false,
    },
    carrito: {
        type: Array,
        default: [],
    },
    historial: {
        type: Array,
        default: [],
    },
    facebookId: {
        type: String,
        default: "",
    },
    googleId: {
        type: String,
        default: "",
    },
    githubId: {
        type: String,
        default: "",
    }
});

UserSchema.pre("save", async function (next) {
    if (this.password) {
        const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;
    }
    next();
});

UserSchema.plugin(findOrCreate);

module.exports = mongoose.model("User", UserSchema);
