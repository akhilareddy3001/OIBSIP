function Review(){
    return(
        <section className="bg-orange-50 py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-5xl font-bold text-center text-gray-800">
                            What Our Customers Say
                        </h2>
                        <p className="text-center text-gray-500 mt-4">
                            Thousands of customers love our pizzas and fast delivery.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 mt-14">
                            {/* Review 1 */}
                            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-3xl">
                                        👩
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Akhila</h3>
                                        <p className="text-yellow-500">★★★★★</p>
                                    </div>
                                </div>
                                <p className="mt-6 text-gray-600">
                                    The pizza was fresh, cheesy, and delivered in less than 30 minutes.
                                    Highly recommended!
                                </p>
                            </div>
                            {/* Review 2 */}
                            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-3xl">
                                        👨
                                    </div>
                                        <div>
                                            <h3 className="text-xl font-bold">Rahul</h3>
                                            <p className="text-yellow-500">★★★★★</p>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-gray-600">
                                        Amazing quality, excellent service, and affordable prices.
                                        Definitely ordering again.
                                    </p>
                                </div>
                                {/* Review 3 */}
                                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-3xl">
                                            👨‍🍳
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">Suresh</h3>
                                            <p className="text-yellow-500">★★★★★</p>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-gray-600">
                                        Best pizza delivery app I've used. The customization options are fantastic.
                                        </p>
                                </div>
                        </div>
                    </div>
                </section>
    );
}
export default Review;