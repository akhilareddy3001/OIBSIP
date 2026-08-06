function PizzaInfo({ pizza, finalPrice }) {
    return (
        <div>

            <h1 className="text-5xl font-bold">
                {pizza.name}
            </h1>

            <p className="text-yellow-500 mt-4">
                ⭐⭐⭐⭐⭐ {pizza.rating}
            </p>

            <h2 className="text-red-600 text-4xl font-bold mt-5">
                ₹{finalPrice}
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
                {pizza.description}
            </p>

        </div>
    );
}

export default PizzaInfo;