const express = require("express");

const {
    getAllPizzas,
    getPizzaById,
} = require("../controllers/pizzaController");

const router = express.Router();

// Get all pizzas
router.get("/", getAllPizzas);

// Get single pizza by MongoDB ID
router.get("/:id", getPizzaById);

module.exports = router;