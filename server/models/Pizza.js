const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },

        rating: {
            type: Number,
            default: 0,
        },

        image: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            required: true,
        },

        isVeg: {
            type: Boolean,
            default: true,
        },

        available: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Pizza", pizzaSchema);