const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        userEmail: {
            type: String,
            required: true,
        },

        items: [
            {
                name: {
                    type: String,
                    required: true,
                },

                image: String,

                price: {
                    type: Number,
                    required: true,
                },

                quantity: {
                    type: Number,
                    default: 1,
                },

                size: String,

                crust: String,
                isCustom: {
                    type: Boolean,
                    default: false,
                },
                sauce: {
                    type: String,
                    default: "",
                },
                cheese: {
                    type: String,
                    default: "",
                },
                toppings: {
                    type: [String],
                    default: [],
                },
            },
        ],

        address: {
            fullName: String,
            phone: String,
            house: String,
            street: String,
            city: String,
            pincode: String,
        },

        paymentMethod: {
            type: String,
            required: true,
        },

        subtotal: {
            type: Number,
            required: true,
        },

        deliveryFee: {
            type: Number,
            default: 0,
        },

        gst: {
            type: Number,
            default: 0,
        },

        total: {
            type: Number,
            required: true,
        },

        status: {
            type: String,
            default: "Preparing",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Order", orderSchema);