const SpecialPrice = require("../models/SpecialPrice.model");
const CustomError = require("../utils/CustomError");

const getSpecialPricesByUser = async (usuarioId) => {
    const specialPrice = await SpecialPrice.findOne({ usuarioId }).populate("productos.productId");
    if (!specialPrice) {
        throw new CustomError(`No hay precios especiales para el usuario ${usuarioId}`, 404);
    }
    return specialPrice;
};

const upsertSpecialPrice = async (usuarioId, productos) => {
    if (!productos || !productos.length) {
        throw new CustomError("Debe agregar al menos un producto con precio especial", 400);
    }
    return SpecialPrice.findOneAndUpdate(
        {usuarioId},
        {usuarioId, productos},
        {new: true, upsert: true}
    );
};

module.exports = { getSpecialPricesByUser, upsertSpecialPrice };
