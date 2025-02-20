const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String },
    stock: { type: Number, default: 0 },
    description: { type: String },
    brand: { type: String },
    sku: { type: String },
    tags: { type: [String] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", productSchema, "productos");

module.exports = Product;
