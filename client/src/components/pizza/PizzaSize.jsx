function PizzaSize( {selectedSize, setSelectedSize }) {

    return (
        <div className="flex gap-4 mt-4">
            <button
            onClick={() => setSelectedSize("Small")}
            className={`px-6 py-3 rounded-xl border ${
                selectedSize === "Small"
                ? "bg-red-600 text-white"
                : "bg-white"
            }`}
            >
                Small
            </button>
            <button
            onClick={() => setSelectedSize("Medium")}
            className={`px-6 py-3 rounded-xl border ${
                selectedSize === "Medium"
                ? "bg-red-600 text-white"
                : "bg-white"
            }`}
            >
                Medium
            </button>
            <button
            onClick={() => setSelectedSize("Large")}
            className={`px-6 py-3 rounded-xl border ${
                selectedSize === "Large"
                ? "bg-red-600 text-white"
                : "bg-white"
            }`}
            >
                Large
            </button>
        </div>

    );

}

export default PizzaSize;