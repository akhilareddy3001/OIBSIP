function Offers(){
    return(
        <section className="bg-red-600 text-white py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-5xl font-bold text-center">
                            Today's Special Offers
                        </h2>
                        <p className="text-center mt-4 text-lg">
                            Grab these amazing deals before they expire!
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 mt-14">
                            {/* Offer 1 */}
                            <div className="bg-white text-black rounded-3xl p-8 text-center shadow-xl hover:scale-105 transition duration-300">
                                <h3 className="text-3xl font-bold text-red-600">
                                    🍕 Buy 1 Get 1
                                    </h3>
                                    <p className="mt-4 text-gray-600">
                                        Buy any Medium Pizza and get another absolutely FREE.
                                    </p>
                                    <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700">
                                        Claim Offer
                                    </button>
                            </div>
                            {/* Offer 2 */}
                            <div className="bg-white text-black rounded-3xl p-8 text-center shadow-xl hover:scale-105 transition duration-300">
                                <h3 className="text-3xl font-bold text-red-600">
                                    🎉 30% OFF
                                </h3>
                                <p className="mt-4 text-gray-600">
                                    Flat 30% discount on orders above ₹999.
                                </p>
                                <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700">
                                    Grab Now
                                </button>
                            </div>
                            {/* Offer 3 */}
                            <div className="bg-white text-black rounded-3xl p-8 text-center shadow-xl hover:scale-105 transition duration-300">
                                <h3 className="text-3xl font-bold text-red-600">
                                    🚚 Free Delivery
                                </h3>
                                <p className="mt-4 text-gray-600">
                                    Free delivery on your first online order.
                                </p>
                                <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700">
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
    );
}
export default Offers;