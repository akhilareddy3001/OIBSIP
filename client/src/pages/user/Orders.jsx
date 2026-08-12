import { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

import Navbar from "../../components/common/Navbar";

import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";

function Orders() {

    const { cart, setCart } = useContext(CartContext);
    const { user, loading: authLoading } = useContext(AuthContext);

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // --------------------------------
    // FETCH LOGGED-IN USER ORDERS
    // --------------------------------

    useEffect(() => {

        const fetchOrders = async () => {

            if (!user) {
                setLoading(false);
                return;
            }

            try {

                setLoading(true);
                setError("");

                // Get Firebase token
                const token = await user.getIdToken();

                const response = await fetch(
                    "https://oibsip-e8u8.onrender.com/api/orders/my-orders",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(
                        data.message || "Failed to fetch orders"
                    );
                }

                setOrders(data);

            } catch (error) {

                console.error(
                    "Fetch Orders Error:",
                    error
                );

                setError(
                    error.message || "Unable to load orders."
                );

            } finally {

                setLoading(false);

            }
        };

        if (!authLoading) {
            fetchOrders();
        }

    }, [user, authLoading]);


    // --------------------------------
    // REORDER
    // --------------------------------

    const handleReorder = (order) => {

        const reorderedItems = order.items.map(
            (item) => ({
                ...item,

                // Create new unique cart ID
                id: `${item._id || "item"}-${Date.now()}-${Math.random()}`,
            })
        );

        setCart([
            ...cart,
            ...reorderedItems,
        ]);

        alert("Items added to cart! 🍕");
    };


    // --------------------------------
    // AUTH LOADING
    // --------------------------------

    if (authLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">

                <p className="text-xl font-semibold">
                    Loading...
                </p>

            </div>
        );
    }


    // --------------------------------
    // NOT LOGGED IN
    // --------------------------------

    if (!user) {

        return (
            <Navigate
                to="/login"
                replace
            />
        );

    }


    return (
        <>
            <Navbar />

            <section className="bg-orange-50 min-h-screen py-12">

                <div className="max-w-6xl mx-auto px-6">

                    <h1 className="text-4xl font-bold mb-8">
                        My Orders
                    </h1>


                    {/* LOADING */}

                    {loading && (

                        <div className="bg-white rounded-2xl shadow-lg p-10 text-center">

                            <p className="text-xl font-semibold">
                                Loading orders...
                            </p>

                        </div>

                    )}


                    {/* ERROR */}

                    {!loading && error && (

                        <div className="bg-white rounded-2xl shadow-lg p-10 text-center">

                            <p className="text-red-600 font-semibold">
                                {error}
                            </p>

                        </div>

                    )}


                    {/* NO ORDERS */}

                    {!loading &&
                        !error &&
                        orders.length === 0 && (

                            <div className="bg-white rounded-2xl shadow-lg p-10 text-center">

                                <h2 className="text-2xl font-bold mb-3">
                                    No Orders Yet 🍕
                                </h2>

                                <p className="text-gray-500">
                                    Place your first order to see it here.
                                </p>

                                <Link
                                    to="/menu"
                                    className="inline-block mt-6 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
                                >
                                    Explore Menu
                                </Link>

                            </div>

                        )}


                    {/* ORDERS */}

                    {!loading &&
                        !error &&
                        orders.length > 0 && (

                            <div className="space-y-6">

                                {orders.map((order) => (

                                    <div
                                        key={order._id}
                                        className="bg-white rounded-2xl shadow-lg p-6"
                                    >

                                        {/* HEADER */}

                                        <div className="flex justify-between items-center">

                                            <div>

                                                <h2 className="text-xl font-bold">
                                                    Order #{order._id}
                                                </h2>

                                                <p className="text-gray-500 mt-1">

                                                    {order.createdAt
                                                        ? new Date(
                                                              order.createdAt
                                                          ).toLocaleString()
                                                        : ""}

                                                </p>

                                            </div>


                                            {/* STATUS */}

                                            <span
                                                className={`px-4 py-2 rounded-full text-white font-semibold ${
                                                    order.status === "Delivered"
                                                        ? "bg-green-500"
                                                        : order.status ===
                                                          "Out for Delivery"
                                                        ? "bg-blue-500"
                                                        : order.status ===
                                                          "Cancelled"
                                                        ? "bg-red-500"
                                                        : "bg-yellow-500"
                                                }`}
                                            >
                                                {order.status || "Preparing"}
                                            </span>

                                        </div>


                                        {/* ITEMS */}

                                        <div className="mt-5">

                                            <h3 className="font-semibold mb-2">
                                                Items
                                            </h3>

                                            {order.items?.map(
                                                (item, index) => (

                                                    <p
                                                        key={
                                                            item._id ||
                                                            index
                                                        }
                                                    >
                                                        {item.name} ×{" "}
                                                        {item.quantity}
                                                    </p>

                                                )
                                            )}

                                        </div>


                                        {/* BOTTOM */}

                                        <div className="flex justify-between items-end mt-6">

                                            <div>

                                                <p>
                                                    <strong>
                                                        Total:
                                                    </strong>{" "}
                                                    ₹{order.total}
                                                </p>

                                                <p>
                                                    <strong>
                                                        Payment:
                                                    </strong>{" "}
                                                    {order.paymentMethod}
                                                </p>

                                            </div>


                                            <div className="flex gap-3">

                                                <Link
                                                    to={`/orders/${order._id}`}
                                                    className="border border-red-600 text-red-600 px-5 py-2 rounded-lg hover:bg-red-600 hover:text-white transition"
                                                >
                                                    View Details
                                                </Link>


                                                <button
                                                    onClick={() =>
                                                        handleReorder(
                                                            order
                                                        )
                                                    }
                                                    className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
                                                >
                                                    Reorder
                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        )}

                </div>

            </section>
        </>
    );
}

export default Orders;