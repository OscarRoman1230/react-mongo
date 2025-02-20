const mongoose = require("mongoose");
require("./Product.model"); // 👈 Asegura que Mongoose registre el modelo antes de usarlo

const specialPriceSchema = new mongoose.Schema({
    usuarioId: { type: String, required: true, unique: true },
    productos: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
            precioEspecial: { type: Number, required: true },
        },
    ],
});

const SpecialPrice = mongoose.model("SpecialPrice", specialPriceSchema, "preciosEspecialesRoman05");

module.exports = SpecialPrice;
