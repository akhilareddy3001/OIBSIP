import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";

import { auth, googleProvider } from "../../firebase";

function Login() {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from || "/";

    const [isSigningIn, setIsSigningIn] = useState(false);

    const handleGoogleSignIn = async () => {

        // Prevent multiple popups
        if (isSigningIn) {
            return;
        }

        try {
            setIsSigningIn(true);

            googleProvider.setCustomParameters({
                prompt: "select_account",
            });

            const result = await signInWithPopup(
                auth,
                googleProvider
            );

            console.log(
                "Login successful:",
                result.user
            );

            navigate(from, {
                replace: true,
            });

        } catch (error) {

            console.error(
                "Google Login Error:",
                error
            );

            // User manually closed popup
            if (
                error.code === "auth/popup-closed-by-user"
            ) {
                return;
            }

            // Another popup was already running
            if (
                error.code === "auth/cancelled-popup-request"
            ) {
                console.log(
                    "Another Google login popup was already active."
                );

                return;
            }

            alert(
                `Google Login Error: ${
                    error.code || error.message
                }`
            );

        } finally {

            setIsSigningIn(false);

        }
    };


    return (
        <section className="min-h-screen bg-orange-50 flex items-center justify-center">

            <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md text-center">

                <div className="text-6xl mb-5">
                    🍕
                </div>

                <h1 className="text-3xl font-bold">
                    Welcome to PizzaHub
                </h1>

                <p className="text-gray-500 mt-3">
                    Sign in to continue ordering your favorite pizzas
                </p>


                {/* GOOGLE LOGIN */}

                <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    disabled={isSigningIn}
                    className={`w-full mt-8 border-2 border-gray-300 py-3 rounded-xl font-semibold transition ${
                        isSigningIn
                            ? "bg-gray-200 cursor-not-allowed"
                            : "hover:bg-gray-100"
                    }`}
                >
                    {isSigningIn
                        ? "Signing in..."
                        : "Continue with Google"}
                </button>


                {/* GUEST */}

                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="mt-5 text-red-600 hover:underline"
                >
                    Continue as Guest
                </button>

            </div>

        </section>
    );
}

export default Login;