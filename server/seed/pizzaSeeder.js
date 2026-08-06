const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Pizza = require("../models/Pizza");

dotenv.config();

const pizzas = [
    {
        name: "Margherita",
        category: "Veg",
        price: 299,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=600",
        description:
            "Classic pizza topped with fresh mozzarella, tomato sauce and basil.",
        isVeg: true,
        available: true,
    },

    {
        name: "Farmhouse",
        category: "Veg",
        price: 399,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
        description:
            "Loaded with mushrooms, onions, capsicum and fresh tomatoes.",
        isVeg: true,
        available: true,
    },

    {
        name: "Pepperoni",
        category: "Non-Veg",
        price: 499,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=600",
        description:
            "Delicious pepperoni slices with extra mozzarella cheese.",
        isVeg: false,
        available: true,
    },

    {
        name: "Cheese Burst",
        category: "Cheese Burst",
        price: 549,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=600",
        description:
            "Rich cheese burst crust filled with creamy melted cheese.",
        isVeg: true,
        available: true,
    },

    {
        name: "Veg Supreme",
        category: "Veg",
        price: 449,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600",
        description:
            "Fresh vegetables, olives, sweet corn and premium cheese.",
        isVeg: true,
        available: true,
    },

    {
        name: "Chicken Deluxe",
        category: "Non-Veg",
        price: 599,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
        description:
            "Juicy grilled chicken with mozzarella cheese and herbs.",
        isVeg: false,
        available: true,
    },
];

const seedPizzas = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected");

        // Remove existing pizzas
        await Pizza.deleteMany();

        // Insert pizzas
        await Pizza.insertMany(pizzas);

        console.log("Pizzas added successfully 🍕");

        process.exit();

    } catch (error) {

        console.error("Seeder Error:", error);

        process.exit(1);
    }
};

seedPizzas();