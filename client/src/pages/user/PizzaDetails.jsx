import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";

import Navbar from "../../components/common/Navbar";
import PizzaImage from "../../components/pizza/PizzaImage";
import PizzaInfo from "../../components/pizza/PizzaInfo";
import PizzaSize from "../../components/pizza/PizzaSize";
import PizzaQuantity from "../../components/pizza/PizzaQuantity";
import PizzaCrust from "../../components/pizza/PizzaCrust";

import pizzas from "../../data/pizzas";
import { CartContext } from "../../context/CartContext";

function PizzaDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

    const { cart, setCart } =
        useContext(CartContext);


    // ================================
    // FIND PIZZA
    // ================================

    const pizza = pizzas.find(
        (item) => item.id === Number(id)
    );


    // ================================
    // STATE
    // ================================

    const [selectedSize, setSelectedSize] =
        useState("Medium");

    const [quantity, setQuantity] =
        useState(1);

    const [selectedCrust, setSelectedCrust] =
        useState("Thin Crust");

    const [addedToCart, setAddedToCart] =
        useState(false);


    // ================================
    // CHECK IF ALREADY IN CART
    // ================================

    useEffect(() => {

        if (!pizza) return;

        const alreadyInCart = cart.some(
            (item) => item.pizzaId === pizza.id
        );

        setAddedToCart(alreadyInCart);

    }, [cart, pizza]);


    // ================================
    // PIZZA NOT FOUND
    // ================================

    if (!pizza) {

        return (
            <>
                <Navbar />

                <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center">

                    <h1 className="text-3xl font-bold">
                        Pizza Not Found
                    </h1>

                    <Link
                        to="/menu"
                        className="text-red-600 mt-5 font-semibold"
                    >
                        ← Back to Menu
                    </Link>

                </div>
            </>
        );
    }


    // ================================
    // PRICE CALCULATION
    // ================================

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


    // Final price

    const finalPrice =
        unitPrice * quantity;


    // ================================
    // ADD TO CART
    // ================================

    const handleAddToCart = () => {

        const cartItem = {

            // Unique cart item ID
            id: `${pizza.id}-${Date.now()}`,

            // Pizza ID
            pizzaId: pizza.id,

            name: pizza.name,

            image: pizza.image,

            // Customized unit price
            unitPrice: unitPrice,

            // Total price for this cart item
            price: finalPrice,

            quantity: quantity,

            size: selectedSize,

            crust: selectedCrust,
        };


        setCart([
            ...cart,
            cartItem
        ]);


        setAddedToCart(true);


        alert(
            "Pizza added to cart! 🍕"
        );
    };


    // ================================
    // GO TO CART
    // ================================

    const handleGoToCart = () => {

        navigate("/cart");

    };


    // ================================
    // PAGE
    // ================================

    return (
        <>
            <Navbar />


            <section className="bg-orange-50 py-20 min-h-screen">

                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">


                    {/* ================= IMAGE ================= */}

                    <PizzaImage
                        pizza={pizza}
                    />


                    {/* ================= DETAILS ================= */}

                    <div>


                        {/* PIZZA INFO */}

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


                        {/* ================= BUTTONS ================= */}

                        <div className="flex gap-5 mt-10">


                            {/* ADD TO CART / GO TO CART */}

                            {addedToCart ? (

                                <button
                                    onClick={handleGoToCart}
                                    className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl hover:bg-green-600 hover:text-white transition font-semibold"
                                >
                                    Go To Cart 🛒
                                </button>

                            ) : (

                                <button
                                    onClick={handleAddToCart}
                                    className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-xl hover:bg-red-600 hover:text-white transition font-semibold"
                                >
                                    Add To Cart
                                </button>

                            )}


                            {/* CUSTOMIZE PIZZA */}

                            <Link
                                to="/create-pizza"
                            >

                                <button
                                    className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-xl hover:bg-red-600 hover:text-white transition font-semibold"
                                >
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