const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,  
    },
    email:{
        type: String,
        required: true, 
        unique: true, 
    },
    password:{
        type: String,
        required: true, 
    },
    admin:{
        type: Boolean,
        default: false,
    },
    carrito:{
        type: Array,
        default: [],
    },
    historial: {
        type: Array,
        default: [],
    }
}) 

UserSchema.pre("save", async function (next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
});


module.exports = mongoose.model("User", UserSchema)