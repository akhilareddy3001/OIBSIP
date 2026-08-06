const Pizza = require("../models/Pizza");


// Get all pizzas
const getAllPizzas = async (req, res) => {
    try {

        const pizzas = await Pizza.find({
            available: true,
        }).sort({
            createdAt: -1,
        });

        res.status(200).json(pizzas);

    } catch (error) {

        console.error("Get Pizzas Error:", error);

        res.status(500).json({
            message: "Failed to fetch pizzas",
            error: error.message,
        });

    }
};


// Get single pizza
const getPizzaById = async (req, res) => {
    try {

        const pizza = await Pizza.findById(req.params.id);

        if (!pizza) {
            return res.status(404).json({
                message: "Pizza not found",
            });
        }

        res.status(200).json(pizza);

    } catch (error) {

        console.error("Get Pizza Error:", error);

        res.status(500).json({
            message: "Failed to fetch pizza",
            error: error.message,
        });

    }
};


module.exports = {
    getAllPizzas,
    getPizzaById,
};