import { Link, useParams } from "react-router-dom";
import { useState, useContext } from "react";

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

    const { cart, setCart } =
        useContext(CartContext);

    // Find pizza using numeric ID from URL
    const pizza = pizzas.find(
        (item) => item.id === Number(id)
    );

    const [selectedSize, setSelectedSize] =
        useState("Medium");

    const [quantity, setQuantity] =
        useState(1);

    const [selectedCrust, setSelectedCrust] =
        useState("Thin Crust");


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
    }

    else if (selectedSize === "Large") {
        unitPrice += 100;
    }


    // Crust price

    if (selectedCrust === "Cheese Burst") {
        unitPrice += 35;
    }

    else if (selectedCrust === "Pan Pizza") {
        unitPrice += 20;
    }


    const finalPrice =
        unitPrice * quantity;


    // ================================
    // ADD TO CART
    // ================================

    const handleAddToCart = () => {

        const cartItem = {

            id: `${pizza.id}-${Date.now()}`,

            pizzaId: pizza.id,

            name: pizza.name,

            image: pizza.image,

            unitPrice: unitPrice,

            price: finalPrice,

            quantity: quantity,

            size: selectedSize,

            crust: selectedCrust,
        };


        setCart([
            ...cart,
            cartItem
        ]);


        alert(
            "Pizza added to cart! 🍕"
        );
    };


    return (
        <>
            <Navbar />


            <section className="bg-orange-50 py-20 min-h-screen">

                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">


                    {/* IMAGE */}

                    <PizzaImage
                        pizza={pizza}
                    />


                    {/* DETAILS */}

                    <div>


                        <PizzaInfo
                            pizza={pizza}
                            finalPrice={finalPrice}
                        />


                        <PizzaSize
                            selectedSize={selectedSize}
                            setSelectedSize={setSelectedSize}
                        />


                        <PizzaQuantity
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />


                        <PizzaCrust
                            selectedCrust={selectedCrust}
                            setSelectedCrust={setSelectedCrust}
                        />


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