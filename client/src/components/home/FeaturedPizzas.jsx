import { Link } from "react-router-dom";
function FeaturedPizzas(){
    return(
        
                <section className="bg-orange-50 py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-5xl font-bold text-center text-gray-800">
                            Our Featured Pizzas
                        </h2>
                        <p className="text-center text-gray-500 mt-4">
                            Choose from our delicious range of freshly baked pizzas.
                        </p>
                        <div className="grid md:grid-cols-3 gap-10 mt-14">
                            {/* Pizza Card 1 */}
                            <Link to ="/pizza/1">
                            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                                <img
                                src="https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=600"
                                alt="Margherita Pizza"className="w-full h-64 object-cover"/>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold">
                                        Margherita Pizza
                                    </h3>
                                    <p className="text-gray-500 mt-2">
                                        Fresh mozzarella, basil, and tomato sauce.
                                    </p>
                                    <div className="flex justify-between items-center mt-6">
                                        <span className="text-red-600 text-2xl font-bold">
                                            ₹299
                                        </span>
                                        <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            {/* Pizza Card 2 */}
                            <Link to ="/pizza/2">
                            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                                <img
                                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
                                alt="Pepperoni Pizza"
                                className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold">
                                        Farmhouse
                                    </h3>
                                    <p className="text-gray-500 mt-2">
                                        Loaded with cheese and pepperoni slices.
                                    </p>
                                    <div className="flex justify-between items-center mt-6">
                                        <span className="text-red-600 text-2xl font-bold">
                                            ₹399
                                        </span>
                                        <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700">
                                            Add to Cart
                                        </button>
                                    </div>
                                    
                                </div>
                            </div>
                            </Link>
                            {/* Pizza Card 3 */}
                            <Link to ="/pizza/3">
                            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                                <img
                                src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=600"
                                alt="Veggie Pizza"
                                className="w-full h-64 object-cover"/>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold">
                                        pepperoni
                                    </h3>
                                    <p className="text-gray-500 mt-2">
                                        Fresh vegetables with premium cheese.
                                    </p>
                                    <div className="flex justify-between items-center mt-6">
                                        <span className="text-red-600 text-2xl font-bold">
                                            ₹499
                                        </span>
                                        <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </section>

        
    );
}
export default FeaturedPizzas;