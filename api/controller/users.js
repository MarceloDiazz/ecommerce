const UserServices = require('../services/users')

class UserController {
    static async updateUser(req, res){
        const {error, data} = await UserServices.updateUser(req.params.userId, req.body)
    
        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async getUsers(req, res){
        const {error, data} = await UserServices.getUsers()
    
        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async deleteUsers(req, res){
        const {error, data} = await UserServices.deleteUsers(req.params.userId)
    
        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async promoteOrDescendAdmin(req, res){
        const {error, data} = await UserServices.promoteOrDescendAdmin(req.params.userId, req.body.admin)
    
        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async addProductToBasket(req, res){
        const {error, data} = await UserServices.addProductToBasket(req.params.userId, req.body)
    
        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async deleteProductOnBasket(req, res){
        const {error, data} = await UserServices.deleteProductOnBasket(req.params.userId, req.params.productId)
    
        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async updateProductOnBasket(req, res){
        const {error, data} = await UserServices.updateProductOnBasket(req.params.userId, req.params.productId, req.body)
    
        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }
}

module.exports = UserController