import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

function PizzaCard({ pizza }) {

    const { cart, setCart } = useContext(CartContext);
    const navigate = useNavigate();

    const [addedToCart, setAddedToCart] = useState(false);

    // Check if this pizza is already in cart
    useEffect(() => {

        const alreadyInCart = cart.some(
            (item) =>
                item.pizzaId === pizza.id ||
                item.pizzaId === pizza._id
        );

        setAddedToCart(alreadyInCart);

    }, [cart, pizza.id, pizza._id]);


    // -----------------------------
    // ADD TO CART
    // -----------------------------

    const handleAddToCart = () => {

        const cartItem = {

            // Pizza ID
            pizzaId: pizza.id || pizza._id,

            // Unique cart ID
            id: `${pizza.id || pizza._id}-${Date.now()}`,

            name: pizza.name,
            image: pizza.image,
            price: pizza.price,

            quantity: 1,

            // Default customization
            size: "Medium",
            crust: "Thin Crust",
        };

        setCart([
            ...cart,
            cartItem
        ]);

        setAddedToCart(true);
    };


    return (

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition hover:scale-105">

            {/* IMAGE */}

            <img
                src={pizza.image}
                alt={pizza.name}
                className="w-full h-60 object-cover"
            />


            <div className="p-6">

                {/* NAME */}

                <h3 className="text-2xl font-bold">
                    {pizza.name}
                </h3>


                {/* RATING */}

                <p className="text-yellow-500 mt-2">
                    ⭐ {pizza.rating}
                </p>


                {/* CATEGORY */}

                <p className="text-gray-500 mt-2">
                    {pizza.category}
                </p>


                {/* PRICE + BUTTON */}

                <div className="flex justify-between items-center mt-6">

                    <span className="text-red-600 text-2xl font-bold">
                        ₹{pizza.price}
                    </span>


                    {addedToCart ? (

                        <button
                            onClick={() => navigate("/cart")}
                            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition font-semibold"
                        >
                            Go to Cart 🛒
                        </button>

                    ) : (

                        <button
                            onClick={handleAddToCart}
                            className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition font-semibold"
                        >
                            Add to Cart
                        </button>

                    )}

                </div>


                {/* VIEW DETAILS */}

                <Link
                    to={`/pizza/${pizza.id}`}
                    className="block text-center mt-4 border-2 border-red-600 text-red-600 px-5 py-2 rounded-lg hover:bg-red-600 hover:text-white transition"
                >
                    View Details
                </Link>

            </div>

        </div>
    );
}

export default PizzaCard;