const specialPriceService = require("../services/specialPrices.service");

const getSpecialPrices = async (req, res, next) => {
    try {
        const specialPrice = await specialPriceService.getSpecialPricesByUser(req.params.usuarioId);
        res.json(specialPrice);
    } catch (error) {
        next(error);
    }
};

const upsertSpecialPrices = async (req, res, next) => {
    try {
        const { usuarioId, productos } = req.body;
        const updatedSpecialPrice = await specialPriceService.upsertSpecialPrice(usuarioId, productos);
        res.json(updatedSpecialPrice);
    } catch (error) {
        next(error);
    }
};

module.exports = { getSpecialPrices, upsertSpecialPrices };
