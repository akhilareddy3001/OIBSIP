import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";

function OrderSuccess() {
    return (
        <>
            <Navbar />

            <section className="bg-orange-50 min-h-screen flex items-center justify-center">

                <div className="bg-white shadow-xl rounded-3xl p-12 text-center max-w-xl">

                    <div className="text-7xl mb-6">
                        ✅
                    </div>

                    <h1 className="text-4xl font-bold text-gray-800">
                        Order Confirmed!
                    </h1>

                    <p className="text-gray-600 mt-4 text-lg">
                        Your delicious pizza is being prepared.
                    </p>

                    <p className="text-gray-500 mt-2">
                        Estimated delivery time: 30 - 40 minutes
                    </p>

                    <div className="flex justify-center gap-4 mt-8">

                        <Link to="/menu">
                            <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-xl">
                                Continue
                            </button>
                        </Link>

                        <Link to="/">
                            <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-xl">
                                Go Home
                            </button>
                        </Link>

                    </div>

                </div>

            </section>
        </>
    );
}

export default OrderSuccess;