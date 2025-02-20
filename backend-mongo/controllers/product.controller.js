const productService = require("../services/product.service");

const getProducts = async (req, res, next) => {
    try {
        const products = await productService.getAllProducts();
        res.json(products);
    } catch (error) {
        next(error); // Enviamos el error al middleware global
    }
};

module.exports = { getProducts };
