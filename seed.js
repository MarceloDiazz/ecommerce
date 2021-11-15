const Product = require("./api/models/Products");
const History = require("./api/models/History");
const User = require("./api/models/Users");
const data = require("./seed.json")

module.exports = () => {
    const seedDB = async () => {
        await Product.deleteMany({})
        await Product.insertMany(data)
        await History.deleteMany({})
        await User.deleteMany({})
        await User.create({
            name: "admin",
            password: "admin123",
            email: "admin@adventure.com",
            admin: true
        })
    }
    seedDB().then(() => console.log('seed complete'))
}