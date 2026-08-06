import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import Navbar from "../../components/common/Navbar";
import PizzaImage from "../../components/pizza/PizzaImage";
import PizzaInfo from "../../components/pizza/PizzaInfo";
import PizzaSize from "../../components/pizza/PizzaSize";
import PizzaQuantity from "../../components/pizza/PizzaQuantity";
import PizzaCrust from "../../components/pizza/PizzaCrust";

import { CartContext } from "../../context/CartContext";

function PizzaDetails() {

    const { id } = useParams();

    const { cart, setCart } = useContext(CartContext);

    // Pizza from MongoDB
    const [pizza, setPizza] = useState(null);

    // Loading / Error
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Customization
    const [selectedSize, setSelectedSize] = useState("Medium");
    const [quantity, setQuantity] = useState(1);
    const [selectedCrust, setSelectedCrust] = useState("Thin Crust");


    // --------------------------------
    // FETCH PIZZA FROM MONGODB
    // --------------------------------

    useEffect(() => {

        const fetchPizza = async () => {

            try {

                setLoading(true);
                setError("");

                const response = await fetch(
                    `http://localhost:5000/api/pizzas/${id}`
                );

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(
                        data.message || "Failed to fetch pizza"
                    );
                }

                setPizza(data);

            } catch (error) {

                console.error("Fetch Pizza Error:", error);

                setError(
                    error.message || "Unable to load pizza."
                );

            } finally {

                setLoading(false);

            }

        };

        fetchPizza();

    }, [id]);


    // --------------------------------
    // LOADING
    // --------------------------------

    if (loading) {
        return (
            <>
                <Navbar />

                <div className="min-h-screen bg-orange-50 flex items-center justify-center">

                    <p className="text-2xl font-semibold">
                        Loading pizza... 🍕
                    </p>

                </div>
            </>
        );
    }


    // --------------------------------
    // ERROR
    // --------------------------------

    if (error || !pizza) {
        return (
            <>
                <Navbar />

                <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center">

                    <h1 className="text-3xl font-bold">
                        Pizza Not Found
                    </h1>

                    <p className="text-gray-500 mt-3">
                        {error}
                    </p>

                    <Link
                        to="/menu"
                        className="text-red-600 font-semibold mt-5"
                    >
                        ← Back to Menu
                    </Link>

                </div>
            </>
        );
    }


    // --------------------------------
    // PRICE CALCULATION
    // --------------------------------

    let unitPrice = pizza.price;

    // Size price
    if (selectedSize === "Small") {
        unitPrice -= 50;
    } else if (selectedSize === "Large") {
        unitPrice += 100;
    }

    // Crust price
    if (selectedCrust === "Cheese Burst") {
        unitPrice += 35;
    } else if (selectedCrust === "Pan Pizza") {
        unitPrice += 20;
    }

    // Total price
    const finalPrice = unitPrice * quantity;


    // --------------------------------
    // ADD TO CART
    // --------------------------------

    const handleAddToCart = () => {

        const cartItem = {

            // MongoDB pizza ID
            pizzaId: pizza._id,

            // Unique cart item ID
            // Allows same pizza with different size/crust
            id: `${pizza._id}-${Date.now()}`,

            name: pizza.name,
            image: pizza.image,

            // Store customized unit price
            price: unitPrice,

            quantity: quantity,

            size: selectedSize,
            crust: selectedCrust,
        };

        setCart([
            ...cart,
            cartItem
        ]);

        alert("Pizza added to cart! 🍕");
    };


    return (
        <>
            <Navbar />

            <section className="bg-orange-50 py-20 min-h-screen">

                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">


                    {/* PIZZA IMAGE */}

                    <PizzaImage
                        pizza={pizza}
                    />


                    {/* PIZZA INFORMATION */}

                    <div>

                        <PizzaInfo
                            pizza={pizza}
                            finalPrice={finalPrice}
                        />


                        {/* SIZE */}

                        <PizzaSize
                            selectedSize={selectedSize}
                            setSelectedSize={setSelectedSize}
                        />


                        {/* QUANTITY */}

                        <PizzaQuantity
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />


                        {/* CRUST */}

                        <PizzaCrust
                            selectedCrust={selectedCrust}
                            setSelectedCrust={setSelectedCrust}
                        />


                        {/* BUTTONS */}

                        <div className="flex gap-5 mt-10">

                            <button
                                onClick={handleAddToCart}
                                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-xl hover:bg-red-600 hover:text-white transition"
                            >
                                Add To Cart
                            </button>


                            <Link to="/create-pizza">

                                <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-xl hover:bg-red-600 hover:text-white transition">
                                    Customize Pizza
                                </button>

                            </Link>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}

export default PizzaDetails;