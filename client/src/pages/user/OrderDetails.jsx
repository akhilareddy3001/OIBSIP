import { useContext, useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";

import Navbar from "../../components/common/Navbar";
import { AuthContext } from "../../context/AuthContext";

function OrderDetails() {

    const { id } = useParams();

    const { user, loading } = useContext(AuthContext);

    const [order, setOrder] = useState(null);
    const [orderLoading, setOrderLoading] = useState(true);
    const [error, setError] = useState("");


    // --------------------------------
    // FETCH ORDER FROM MONGODB
    // --------------------------------

    useEffect(() => {

        // Wait until Firebase finishes checking login
        if (loading) {
            return;
        }

        // Don't fetch if user is not logged in
        if (!user) {
            return;
        }

        const fetchOrder = async () => {

            try {

                setOrderLoading(true);
                setError("");

                const response = await fetch(
                    `https://oibsip-e8u8.onrender.com/api/orders/${id}`
                );

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(
                        data.message || "Failed to fetch order"
                    );
                }

                setOrder(data);

            } catch (error) {

                console.error("Fetch Order Error:", error);

                setError(error.message);

            } finally {

                setOrderLoading(false);

            }

        };

        fetchOrder();

    }, [id, user, loading]);


    // --------------------------------
    // FIREBASE LOADING
    // --------------------------------

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">

                <p className="text-xl font-semibold">
                    Checking login...
                </p>

            </div>
        );
    }


    // --------------------------------
    // USER NOT LOGGED IN
    // --------------------------------

    if (!user) {
        return (
            <Navigate
                to="/login"
                state={{ from: `/orders/${id}` }}
                replace
            />
        );
    }


    // --------------------------------
    // ORDER LOADING
    // --------------------------------

    if (orderLoading) {
        return (
            <>
                <Navbar />

                <div className="min-h-screen flex items-center justify-center">

                    <p className="text-xl font-semibold">
                        Loading order...
                    </p>

                </div>
            </>
        );
    }


    // --------------------------------
    // ERROR / ORDER NOT FOUND
    // --------------------------------

    if (error || !order) {
        return (
            <>
                <Navbar />

                <div className="min-h-screen flex flex-col items-center justify-center">

                    <h1 className="text-3xl font-bold">
                        Order Not Found
                    </h1>

                    <p className="text-gray-500 mt-3">
                        {error || "Unable to find this order."}
                    </p>

                    <Link
                        to="/orders"
                        className="text-red-600 font-semibold mt-5"
                    >
                        ← Back to Orders
                    </Link>

                </div>
            </>
        );
    }


    // --------------------------------
    // ORDER DETAILS PAGE
    // --------------------------------

    return (
        <>
            <Navbar />

            <section className="bg-orange-50 min-h-screen py-12">

                <div className="max-w-4xl mx-auto px-6">


                    {/* Back Button */}

                    <Link
                        to="/orders"
                        className="text-red-600 font-semibold"
                    >
                        ← Back to Orders
                    </Link>


                    <div className="bg-white shadow-lg rounded-2xl p-8 mt-6">


                        {/* ORDER HEADER */}

                        <div className="flex justify-between items-center">

                            <div>

                                <h1 className="text-3xl font-bold">
                                    Order #{order._id}
                                </h1>

                                <p className="text-gray-500 mt-2">

                                    {order.createdAt
                                        ? new Date(
                                            order.createdAt
                                        ).toLocaleString()
                                        : ""}

                                </p>

                            </div>


                            {/* ORDER STATUS */}

                            <span
                                className={`px-4 py-2 rounded-full text-white font-semibold ${
                                    order.status === "Delivered"
                                        ? "bg-green-500"
                                        : order.status === "Out for Delivery"
                                        ? "bg-blue-500"
                                        : order.status === "Cancelled"
                                        ? "bg-red-500"
                                        : "bg-yellow-500"
                                }`}
                            >
                                {order.status}
                            </span>

                        </div>


                        <hr className="my-6" />


                        {/* ITEMS */}

                        <h2 className="text-2xl font-bold mb-4">
                            Ordered Items
                        </h2>


                        <div>

                            {order.items?.map((item, index) => (

                                <div
                                    key={item._id || index}
                                    className="flex justify-between items-center border-b py-5"
                                >

                                    <div className="flex items-center gap-4">


                                        {/* Pizza Image */}

                                        {item.image && (

                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-20 h-20 object-cover rounded-xl"
                                            />

                                        )}


                                        <div>

                                            <h3 className="font-bold text-lg">
                                                {item.name}
                                            </h3>


                                            {item.size && (

                                                <p className="text-gray-500">
                                                    Size: {item.size}
                                                </p>

                                            )}


                                            {item.crust && (

                                                <p className="text-gray-500">
                                                    Crust: {item.crust}
                                                </p>

                                            )}


                                            <p className="text-gray-500">
                                                Quantity: {item.quantity}
                                            </p>
                                            {item.isCustom && (
                                                <div className="mt-2">
                                                    <p className="text-gray-500">
                                                        Sauce: {item.sauce}
                                                        </p>
                                                        <p className="text-gray-500">
                                                            Cheese: {item.cheese}
                                                            </p>
                                                            <p className="text-gray-500">
                                                                Toppings:{" "}
                                                                {item.toppings?.length > 0
                                                                ? item.toppings.join(", ")
                                                                : "No Toppings"}
                                                                </p>
                                                                </div>
                                                            )}

                                        </div>

                                    </div>


                                    <p className="font-bold text-lg">
                                        ₹{item.price}
                                    </p>

                                </div>

                            ))}

                        </div>


                        {/* DELIVERY ADDRESS */}

                        <div className="mt-8">

                            <h2 className="text-xl font-bold mb-3">
                                Delivery Address
                            </h2>

                            <p className="font-semibold">
                                {order.address?.fullName}
                            </p>

                            <p>
                                {order.address?.house},{" "}
                                {order.address?.street}
                            </p>

                            <p>
                                {order.address?.city} -{" "}
                                {order.address?.pincode}
                            </p>

                            <p className="mt-1">
                                Phone: {order.address?.phone}
                            </p>

                        </div>


                        <hr className="my-8" />


                        {/* PAYMENT */}

                        <div>

                            <h2 className="text-xl font-bold mb-4">
                                Payment Details
                            </h2>


                            <div className="space-y-2">

                                <div className="flex justify-between">

                                    <span>Payment Method</span>

                                    <span className="font-semibold uppercase">
                                        {order.paymentMethod}
                                    </span>

                                </div>


                                <div className="flex justify-between">

                                    <span>Subtotal</span>

                                    <span>
                                        ₹{order.subtotal}
                                    </span>

                                </div>


                                <div className="flex justify-between">

                                    <span>Delivery Fee</span>

                                    <span>
                                        ₹{order.deliveryFee}
                                    </span>

                                </div>


                                <div className="flex justify-between">

                                    <span>GST</span>

                                    <span>
                                        ₹{order.gst}
                                    </span>

                                </div>


                                <hr className="my-3" />


                                <div className="flex justify-between text-2xl font-bold">

                                    <span>Total</span>

                                    <span>
                                        ₹{order.total}
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}

export default OrderDetails;