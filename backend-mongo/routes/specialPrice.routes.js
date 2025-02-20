const express = require("express");
const { getSpecialPrices, upsertSpecialPrices } = require("../controllers/specialPrice.controller");

const router = express.Router();

router.get("/:usuarioId", getSpecialPrices);
router.post("/", upsertSpecialPrices);

module.exports = router;
