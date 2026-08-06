import { Link } from "react-router-dom";
function Hero(){
    return(
        <section className="bg-orange-50 min-h-screen flex items-center">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                        {/*left content*/}
                        <div>
                            <p className="text-red-600 font-semibold text-lg">
                                🍕 #1 Pizza Delivery in Your City
                            </p>
                            <h1 className="text-6xl font-bold text-gray-900 leading-tight mt-3">
                                Fresh &
                                <br />
                                Hot <span className="text-red-600">Pizza</span>
                                <br />Delivered<br />To Your Door
                            </h1>
                            <p className="mt-6 text-gray-600 text-lg leading-8">
                                Experience the perfect blend of fresh ingredients,
                                premium cheese, and delicious toppings.
                                Fast delivery in under 30 minutes.
                            </p>
                            <div className="mt-8 flex gap-5">
                                <Link to="/menu">
                                <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold">
                                    Order Now 🍕
                                    </button>
                                </Link>
                                <Link to = "/menu">
                                    <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold">
                                        Explore Menu
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img src = "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700"
                            alt = "Pizza" className="rounded-3xl shadow-2xl" hover:scale-105 transition duration-500/>

                        </div>
                    </div>
                </section>
    );
}
export default Hero;
