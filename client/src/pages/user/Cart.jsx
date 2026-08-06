import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import Navbar from "../../components/common/Navbar";

function Cart() {

    const { cart, setCart } = useContext(CartContext);


    // --------------------------------
    // REMOVE ITEM
    // --------------------------------

    const removeItem = (indexToRemove) => {

        const updatedCart = cart.filter(
            (_, index) => index !== indexToRemove
        );

        setCart(updatedCart);
    };


    // --------------------------------
    // INCREASE QUANTITY
    // --------------------------------

    const increaseQuantity = (index) => {

        const updatedCart = cart.map((item, itemIndex) => {

            if (itemIndex === index) {
                return {
                    ...item,
                    quantity: item.quantity + 1,
                };
            }

            return item;
        });

        setCart(updatedCart);
    };


    // --------------------------------
    // DECREASE QUANTITY
    // --------------------------------

    const decreaseQuantity = (index) => {

        const updatedCart = cart.map((item, itemIndex) => {

            if (
                itemIndex === index &&
                item.quantity > 1
            ) {
                return {
                    ...item,
                    quantity: item.quantity - 1,
                };
            }

            return item;
        });

        setCart(updatedCart);
    };


    // --------------------------------
    // PRICE CALCULATION
    // --------------------------------

    const subtotal = cart.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    const deliveryFee =
        cart.length > 0 ? 50 : 0;

    const gst =
        Math.round(subtotal * 0.05);

    const total =
        subtotal + deliveryFee + gst;


    return (
        <>
            <Navbar />

            <section className="bg-orange-50 min-h-screen">

                <div className="max-w-7xl mx-auto py-10 px-6 grid lg:grid-cols-3 gap-8">


                    {/* LEFT SIDE */}

                    <div className="lg:col-span-2">

                        <h1 className="text-4xl font-bold mb-8">
                            🛒 My Cart
                        </h1>


                        {/* EMPTY CART */}

                        {cart.length === 0 ? (

                            <div className="bg-white rounded-2xl shadow p-10 text-center">

                                <h2 className="text-2xl font-bold">
                                    Your cart is empty 🍕
                                </h2>

                                <p className="text-gray-500 mt-2">
                                    Add some pizzas to continue.
                                </p>

                                <Link
                                    to="/menu"
                                    className="inline-block mt-6 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
                                >
                                    Explore Menu
                                </Link>

                            </div>

                        ) : (

                            cart.map((item, index) => (

                                <div
                                    key={item.id || index}
                                    className="bg-white flex items-center justify-between border rounded-xl p-5 mb-5 shadow"
                                >

                                    {/* LEFT */}

                                    <div className="flex items-center gap-5">

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-28 h-28 rounded-xl object-cover"
                                        />


                                        <div>

                                            <h2 className="text-2xl font-bold">
                                                {item.name}
                                            </h2>


                                            {item.size && (
                                                <p>
                                                    Size: {item.size}
                                                </p>
                                            )}


                                            {item.crust && (
                                                <p>
                                                    Crust: {item.crust}
                                                </p>
                                            )}


                                            {/* CUSTOM PIZZA */}

                                            {item.isCustom && (
                                                <>

                                                    <p>
                                                        Sauce: {item.sauce}
                                                    </p>

                                                    <p>
                                                        Cheese: {item.cheese}
                                                    </p>

                                                    <p>
                                                        Toppings:{" "}
                                                        {item.toppings &&
                                                        item.toppings.length > 0
                                                            ? item.toppings.join(", ")
                                                            : "No Toppings"}
                                                    </p>

                                                </>
                                            )}


                                            {/* QUANTITY */}

                                            <div className="flex items-center gap-3 mt-3">

                                                <span>
                                                    Quantity:
                                                </span>


                                                <button
                                                    onClick={() =>
                                                        decreaseQuantity(index)
                                                    }
                                                    disabled={item.quantity <= 1}
                                                    className="bg-gray-200 hover:bg-gray-300 disabled:opacity-50 px-3 py-1 rounded-lg"
                                                >
                                                    −
                                                </button>


                                                <span className="font-bold">
                                                    {item.quantity}
                                                </span>


                                                <button
                                                    onClick={() =>
                                                        increaseQuantity(index)
                                                    }
                                                    className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-lg"
                                                >
                                                    +
                                                </button>

                                            </div>

                                        </div>

                                    </div>


                                    {/* RIGHT */}

                                    <div className="text-right">

                                        <p className="text-sm text-gray-500">
                                            ₹{item.price} × {item.quantity}
                                        </p>

                                        <h2 className="text-2xl font-bold text-red-600 mb-3">

                                            ₹{item.price * item.quantity}

                                        </h2>


                                        <button
                                            onClick={() =>
                                                removeItem(index)
                                            }
                                            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                                        >
                                            Remove
                                        </button>

                                    </div>

                                </div>

                            ))

                        )}

                    </div>


                    {/* ORDER SUMMARY */}

                    <div className="bg-white shadow-xl rounded-2xl p-6 h-fit sticky top-24">

                        <h2 className="text-3xl font-bold mb-6">
                            Order Summary
                        </h2>


                        <div className="flex justify-between mb-3">

                            <span>
                                Subtotal
                            </span>

                            <span>
                                ₹{subtotal}
                            </span>

                        </div>


                        <div className="flex justify-between mb-3">

                            <span>
                                Delivery Fee
                            </span>

                            <span>
                                ₹{deliveryFee}
                            </span>

                        </div>


                        <div className="flex justify-between mb-5">

                            <span>
                                GST (5%)
                            </span>

                            <span>
                                ₹{gst}
                            </span>

                        </div>


                        <hr className="mb-5" />


                        <div className="flex justify-between text-2xl font-bold mb-6">

                            <span>
                                Total
                            </span>

                            <span>
                                ₹{total}
                            </span>

                        </div>


                        {cart.length > 0 ? (

                            <Link to="/checkout">

                                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold">
                                    Proceed to Checkout
                                </button>

                            </Link>

                        ) : (

                            <button
                                disabled
                                className="w-full bg-gray-400 text-white py-4 rounded-xl font-semibold cursor-not-allowed"
                            >
                                Proceed to Checkout
                            </button>

                        )}

                    </div>

                </div>

            </section>
        </>
    );
}

export default Cart;