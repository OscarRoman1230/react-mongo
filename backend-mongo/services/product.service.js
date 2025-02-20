const Product = require("../models/Product.model");
const CustomError = require("../utils/CustomError");

const getAllProducts = async () => {
    const products = await Product.find();
    if (!products.length) {
        throw new CustomError("No hay productos disponibles", 404);
    }
    return products;
};

module.exports = { getAllProducts };
