import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/common/Navbar";

import { CartContext } from "../../context/CartContext";
import { OrderContext } from "../../context/OrderContext";
import { AuthContext } from "../../context/AuthContext";

function Checkout() {
    const { cart, setCart } = useContext(CartContext);
    const { orders, setOrders } = useContext(OrderContext);
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const [address, setAddress] = useState({
        fullName: "",
        phone: "",
        house: "",
        street: "",
        city: "",
        pincode: "",
    });

    const [paymentMethod, setPaymentMethod] = useState("");
    const [upiId, setUpiId] = useState("");

    const [cardDetails, setCardDetails] = useState({
        cardNumber: "",
        expiry: "",
        cvv: "",
    });

    const [placingOrder, setPlacingOrder] = useState(false);

    // --------------------------------
    // ADDRESS CHANGE
    // --------------------------------

    const handleAddressChange = (e) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value,
        });
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

    // --------------------------------
    // PLACE ORDER
    // --------------------------------

    const handlePlaceOrder = async () => {

        // Check login
        if (!user) {
            alert("Please login to place your order.");

            navigate("/login", {
                state: {
                    from: "/checkout",
                },
            });

            return;
        }

        // Check cart
        if (cart.length === 0) {
            alert("Your cart is empty.");
            return;
        }

        // Check address
        if (
            !address.fullName ||
            !address.phone ||
            !address.house ||
            !address.street ||
            !address.city ||
            !address.pincode
        ) {
            alert(
                "Please fill all delivery address fields."
            );
            return;
        }

        // Check payment
        if (!paymentMethod) {
            alert(
                "Please select a payment method."
            );
            return;
        }

        // Check UPI
        if (
            paymentMethod === "upi" &&
            !upiId.trim()
        ) {
            alert("Please enter your UPI ID.");
            return;
        }

        // Check card
        if (
            paymentMethod === "card" &&
            (
                !cardDetails.cardNumber ||
                !cardDetails.expiry ||
                !cardDetails.cvv
            )
        ) {
            alert("Please fill all card details.");
            return;
        }

        try {
            setPlacingOrder(true);

            // --------------------------------
            // GET FIREBASE TOKEN
            // --------------------------------

            const token = await user.getIdToken();

            // --------------------------------
            // CREATE ORDER
            // --------------------------------

            const newOrder = {
                userEmail: user.email,
                items: cart,
                address,
                paymentMethod,
                subtotal,
                deliveryFee,
                gst,
                total,
            };

            // --------------------------------
            // SEND ORDER TO BACKEND
            // --------------------------------

            const response = await fetch(
                "http://localhost:5000/api/orders",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",

                        // Firebase token
                        Authorization: `Bearer ${token}`,
                    },

                    body: JSON.stringify(newOrder),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                    "Failed to place order."
                );
            }

            console.log(
                "Order Saved:",
                data.order
            );

            // Update frontend orders
            setOrders([
                data.order,
                ...orders,
            ]);

            // Clear cart
            setCart([]);

            // Success page
            navigate("/order-success");

        } catch (error) {

            console.error(
                "Place Order Error:",
                error
            );

            alert(
                error.message ||
                "Failed to place order."
            );

        } finally {

            setPlacingOrder(false);

        }
    };

    return (
        <>
            <Navbar />

            <section className="bg-orange-50 min-h-screen py-12">

                <div className="max-w-7xl mx-auto px-6">

                    <h1 className="text-4xl font-bold mb-10">
                        Checkout
                    </h1>

                    <div className="grid lg:grid-cols-3 gap-8">

                        {/* LEFT SIDE */}

                        <div className="lg:col-span-2">

                            {/* DELIVERY ADDRESS */}

                            <div className="bg-white rounded-2xl shadow-lg p-8">

                                <h2 className="text-2xl font-bold mb-6">
                                    Delivery Address
                                </h2>

                                <div className="grid md:grid-cols-2 gap-5">

                                    <input
                                        type="text"
                                        name="fullName"
                                        value={address.fullName}
                                        onChange={handleAddressChange}
                                        placeholder="Full Name"
                                        className="border p-3 rounded-lg"
                                    />

                                    <input
                                        type="tel"
                                        name="phone"
                                        value={address.phone}
                                        onChange={handleAddressChange}
                                        placeholder="Phone Number"
                                        className="border p-3 rounded-lg"
                                    />

                                    <input
                                        type="text"
                                        name="house"
                                        value={address.house}
                                        onChange={handleAddressChange}
                                        placeholder="House / Flat No."
                                        className="border p-3 rounded-lg"
                                    />

                                    <input
                                        type="text"
                                        name="street"
                                        value={address.street}
                                        onChange={handleAddressChange}
                                        placeholder="Street / Area"
                                        className="border p-3 rounded-lg"
                                    />

                                    <input
                                        type="text"
                                        name="city"
                                        value={address.city}
                                        onChange={handleAddressChange}
                                        placeholder="City"
                                        className="border p-3 rounded-lg"
                                    />

                                    <input
                                        type="text"
                                        name="pincode"
                                        value={address.pincode}
                                        onChange={handleAddressChange}
                                        placeholder="Pincode"
                                        className="border p-3 rounded-lg"
                                    />

                                </div>

                            </div>

                            {/* PAYMENT METHOD */}

                            <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">

                                <h2 className="text-2xl font-bold mb-6">
                                    Payment Method
                                </h2>

                                <div className="space-y-4">

                                    {/* COD */}

                                    <label className="flex items-center gap-3 border p-4 rounded-xl cursor-pointer">

                                        <input
                                            type="radio"
                                            name="payment"
                                            value="cod"
                                            checked={
                                                paymentMethod === "cod"
                                            }
                                            onChange={(e) =>
                                                setPaymentMethod(
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <span>
                                            Cash on Delivery
                                        </span>

                                    </label>

                                    {/* UPI */}

                                    <label className="flex items-center gap-3 border p-4 rounded-xl cursor-pointer">

                                        <input
                                            type="radio"
                                            name="payment"
                                            value="upi"
                                            checked={
                                                paymentMethod === "upi"
                                            }
                                            onChange={(e) =>
                                                setPaymentMethod(
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <span>
                                            UPI Payment
                                        </span>

                                    </label>

                                    {paymentMethod === "upi" && (

                                        <input
                                            type="text"
                                            placeholder="Enter UPI ID (example@upi)"
                                            value={upiId}
                                            onChange={(e) =>
                                                setUpiId(
                                                    e.target.value
                                                )
                                            }
                                            className="w-full border p-3 rounded-lg"
                                        />

                                    )}

                                    {/* CARD */}

                                    <label className="flex items-center gap-3 border p-4 rounded-xl cursor-pointer">

                                        <input
                                            type="radio"
                                            name="payment"
                                            value="card"
                                            checked={
                                                paymentMethod === "card"
                                            }
                                            onChange={(e) =>
                                                setPaymentMethod(
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <span>
                                            Credit / Debit Card
                                        </span>

                                    </label>

                                    {paymentMethod === "card" && (

                                        <div className="grid md:grid-cols-2 gap-4">

                                            <input
                                                type="text"
                                                placeholder="Card Number"
                                                value={
                                                    cardDetails.cardNumber
                                                }
                                                onChange={(e) =>
                                                    setCardDetails({
                                                        ...cardDetails,
                                                        cardNumber:
                                                            e.target.value,
                                                    })
                                                }
                                                className="border p-3 rounded-lg md:col-span-2"
                                            />

                                            <input
                                                type="text"
                                                placeholder="Expiry Date (MM/YY)"
                                                value={
                                                    cardDetails.expiry
                                                }
                                                onChange={(e) =>
                                                    setCardDetails({
                                                        ...cardDetails,
                                                        expiry:
                                                            e.target.value,
                                                    })
                                                }
                                                className="border p-3 rounded-lg"
                                            />

                                            <input
                                                type="password"
                                                placeholder="CVV"
                                                value={
                                                    cardDetails.cvv
                                                }
                                                onChange={(e) =>
                                                    setCardDetails({
                                                        ...cardDetails,
                                                        cvv:
                                                            e.target.value,
                                                    })
                                                }
                                                className="border p-3 rounded-lg"
                                            />

                                        </div>

                                    )}

                                </div>

                            </div>

                        </div>

                        {/* ORDER SUMMARY */}

                        <div className="bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-24">

                            <h2 className="text-2xl font-bold mb-6">
                                Order Summary
                            </h2>

                            <div className="flex justify-between mb-3">
                                <span>Subtotal</span>
                                <span>₹{subtotal}</span>
                            </div>

                            <div className="flex justify-between mb-3">
                                <span>Delivery Fee</span>
                                <span>₹{deliveryFee}</span>
                            </div>

                            <div className="flex justify-between mb-5">
                                <span>GST (5%)</span>
                                <span>₹{gst}</span>
                            </div>

                            <hr className="mb-5" />

                            <div className="flex justify-between text-2xl font-bold mb-6">

                                <span>Total</span>
                                <span>₹{total}</span>

                            </div>

                            <button
                                onClick={handlePlaceOrder}
                                disabled={placingOrder}
                                className={`w-full text-white py-4 rounded-xl font-semibold transition ${
                                    placingOrder
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-red-600 hover:bg-red-700"
                                }`}
                            >
                                {placingOrder
                                    ? "Placing Order..."
                                    : "Place Order"}
                            </button>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}

export default Checkout;