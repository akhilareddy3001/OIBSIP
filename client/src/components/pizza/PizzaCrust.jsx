function PizzaCrust({selectedCrust, setSelectedCrust}) {

    return (
        <div className="flex gap-4 mt-4 flex-wrap">
            <button
            onClick={() => setSelectedCrust("Thin Crust")}
            className={`px-6 py-3 rounded-xl border ${
                selectedCrust === "Thin Crust"
                ? "bg-red-600 text-white"
                : "bg-white"
            }`}
            >
                Thin Crust
            </button>
            <button
            onClick={() => setSelectedCrust("Cheese Burst")}
            className={`px-6 py-3 rounded-xl border ${
                selectedCrust === "Cheese Burst"
                ? "bg-red-600 text-white"
                : "bg-white"
            }`}
            >
                Cheese Burst (+₹80)
            </button>

            <button
            onClick={() => setSelectedCrust("Pan Pizza")}
            className={`px-6 py-3 rounded-xl border ${
                selectedCrust === "Pan Pizza"
                ? "bg-red-600 text-white"
                : "bg-white"
            }`}
            >
                Pan Pizza (+₹50)
            </button>

        </div>

    );

}

export default PizzaCrust;