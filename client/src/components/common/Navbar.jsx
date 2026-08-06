import { Link } from "react-router-dom";
import { useContext } from "react";
import { signOut } from "firebase/auth";

import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { auth } from "../../firebase";

import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {

    const { cart } = useContext(CartContext);
    const { user } = useContext(AuthContext);

    // Logout
    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log("User logged out successfully");
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };

    return (
        <nav className="bg-red-600 text-white shadow-md">

            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-3xl font-bold"
                >
                    🍕 PizzaHub
                </Link>


                {/* Navigation */}
                <ul className="flex gap-8 text-lg font-medium items-center">

                    <li>
                        <Link
                            to="/"
                            className="hover:text-yellow-300"
                        >
                            Home
                        </Link>
                    </li>


                    <li>
                        <Link
                            to="/menu"
                            className="hover:text-yellow-300"
                        >
                            Menu
                        </Link>
                    </li>


                    <li>
                        <Link
                            to="/orders"
                            className="hover:text-yellow-300"
                        >
                            Orders
                        </Link>
                    </li>


                    {/* Cart */}
                    <li>
                        <Link
                            to="/cart"
                            className="relative"
                        >
                            <span className="text-2xl">
                                🛒
                            </span>

                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-3 bg-white text-red-600 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                    {cart.length}
                                </span>
                            )}

                        </Link>
                    </li>


                    {/* Login / Logout */}
                    <li>

                        {user ? (

                            <button
                                onClick={handleLogout}
                                className="text-white font-semibold hover:text-yellow-300 transition"
                            >
                                Logout
                            </button>

                        ) : (

                            <Link
                                to="/login"
                                className="text-white font-semibold hover:text-yellow-300 transition"
                            >
                                Login
                            </Link>

                        )}

                    </li>

                </ul>

            </div>

        </nav>
    );
}

export default Navbar;