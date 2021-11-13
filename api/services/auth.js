const User = require("../models/Users");
const joi = require("../config/joi")

class AuthService {
    static async createUser({ name, email, password, admin }) {
        try {
            const {error, value} = joi.validate({email, password})
            if(!error){
                const user = new User({
                    name,
                    email,
                    password,
                    admin
                })
                const resp = await user.save();
               
                return { error: false, data: resp };
            }

            return {error: true, data: error}
        } catch (error) {
            return { error: true, data: error };
        }
    }
}


module.exports = AuthService;