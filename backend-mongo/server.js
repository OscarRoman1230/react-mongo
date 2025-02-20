require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorHandler.middleware");
const productRoutes = require("./routes/product.routes");
const specialPriceRoutes = require("./routes/specialPrice.routes");

const app = express();
const PORT = process.env.PORT || 5000;

// Conectar a MongoDB
connectDB().then(r => r);

// Middleware
app.use(express.json()); // Para manejar JSON en las solicitudes
app.use(cors()); // Para permitir el acceso desde otros dominios

// Rutas de prueba
app.get("/", (req, res) => {
    res.send("API funcionando 🚀");
});

// Rutas del api
app.use("/api/productos", productRoutes);
app.use("/api/precios-especiales", specialPriceRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
