const Product = require("../models/product");
const GenericController = require("./genericController");

const productController = new GenericController(Product);

module.exports = productController;