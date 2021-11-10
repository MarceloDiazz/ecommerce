const mongoose = require("mongoose");
const db = mongoose
  .connect("mongodb+srv://ecommerce:ecommerce@cluster0.13q7z.mongodb.net/ecommerce")
  .then(() => console.log("conectado a mongodb"))
  .catch((err) => console.log("no se pudo conectar a mongodb", err));

module.exports = db;
