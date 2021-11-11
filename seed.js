const Product = require("./api/models/Products");
const data = require("./seed.json")

module.exports = () => {
    const seedDB = async () => {
        await Product.deleteMany({})
        await Product.insertMany(data)
    }
    seedDB().then(() => console.log('seed complete'))
}