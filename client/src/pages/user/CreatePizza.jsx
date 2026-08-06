import { useState, useContext } from "react";
import Navbar from "../../components/common/Navbar";
import { CartContext } from "../../context/CartContext";
function CreatePizza() {

    const [selectedBase, setSelectedBase] = useState("Classic");
    const [selectedSize, setSelectedSize] = useState("Medium");
    const [selectedSauce, setSelectedSauce] = useState("Classic Tomato");
    const [selectedCheese, setSelectedCheese] = useState("Mozzarella");
    const [selectedToppings, setSelectedToppings] = useState([]);
    const { cart, setCart } = useContext(CartContext);

    const handleTopping = (topping) => {
      if (selectedToppings.includes(topping)) {
        setSelectedToppings(
          selectedToppings.filter((item) => item !== topping)
        );
      } else {
        setSelectedToppings([...selectedToppings, topping]);
      }
    };
    // Base starting price
    let customPrice = 199;
    if (selectedBase === "Thin Crust") {
      customPrice += 30;
    } else if (selectedBase === "Cheese Burst") {
      customPrice += 80;
    }
    if (selectedSize === "Small") {
      customPrice -= 30;
    } else if (selectedSize === "Large") {
      customPrice += 100;
    }
    if (selectedCheese === "Extra Cheese") {
      customPrice += 50;
    } else if (selectedCheese === "Cheese Blend") {
      customPrice += 70;
    }
    customPrice += selectedToppings.length * 30;

    const handleAddCustomPizza = () => {

    const customPizza = {
        id: `custom-${Date.now()}`,
        name: "Custom Pizza",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600",
        
        price: customPrice,
        quantity: 1,
        size: selectedSize,
        crust: selectedBase,
        sauce: selectedSauce,
        cheese: selectedCheese,
        toppings: selectedToppings,
        isCustom: true,
    };
    setCart([...cart, customPizza]);
    alert("Custom Pizza added to cart! 🍕");
  };

    return (
        <>
            <Navbar />

            <section className="bg-orange-50 min-h-screen py-12">

                <div className="max-w-7xl mx-auto px-6">

                    <h1 className="text-4xl font-bold text-center">
                        Create Your Own Pizza 🍕
                    </h1>

                    <p className="text-gray-600 text-center mt-3">
                        Build your perfect pizza exactly the way you like it.
                    </p>

                    <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">

                        <h2 className="text-2xl font-bold">
                            1. Choose Your Pizza Base
                        </h2>

                        <div className="flex flex-wrap gap-4 mt-6">

                            <button
                                onClick={() => setSelectedBase("Classic")}
                                className={`px-6 py-3 rounded-xl border ${
                                    selectedBase === "Classic"
                                        ? "bg-red-600 text-white"
                                        : "bg-white"
                                }`}
                            >
                                Classic
                            </button>

                            <button
                                onClick={() => setSelectedBase("Thin Crust")}
                                className={`px-6 py-3 rounded-xl border ${
                                    selectedBase === "Thin Crust"
                                        ? "bg-red-600 text-white"
                                        : "bg-white"
                                }`}
                            >
                                Thin Crust
                            </button>

                            <button
                                onClick={() => setSelectedBase("Cheese Burst")}
                                className={`px-6 py-3 rounded-xl border ${
                                    selectedBase === "Cheese Burst"
                                        ? "bg-red-600 text-white"
                                        : "bg-white"
                                }`}
                            >
                                Cheese Burst
                            </button>

                        </div>
                        {/* Choose Pizza Size */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
                          <h2 className="text-2xl font-bold">
                            2. Choose Pizza Size
                          </h2>
                          <div className="flex flex-wrap gap-4 mt-6">
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
                            </div>
                            {/* Choose Sauce */}
                            <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
                              <h2 className="text-2xl font-bold">
                                3. Choose Your Sauce
                              </h2>
                              <div className="flex flex-wrap gap-4 mt-6">
                                <button
                                onClick={() => setSelectedSauce("Classic Tomato")}
                                className={`px-6 py-3 rounded-xl border ${
                                  selectedSauce === "Classic Tomato"
                                  ? "bg-red-600 text-white"
                                  : "bg-white"
                                }`}
                                >
                                  🍅 Classic Tomato
                                 </button>
                                 <button
                                 onClick={() => setSelectedSauce("Spicy Tomato")}
                                 className={`px-6 py-3 rounded-xl border ${
                                  selectedSauce === "Spicy Tomato"
                                  ? "bg-red-600 text-white"
                                  : "bg-white"
                                }`}
                                >
                                   🌶️ Spicy Tomato
                                   </button>
                                   <button
                                   onClick={() => setSelectedSauce("BBQ")}
                                   className={`px-6 py-3 rounded-xl border ${
                                    selectedSauce === "BBQ"
                                    ? "bg-red-600 text-white"
                                    : "bg-white"
                                   }`}
                                   >
                                    BBQ Sauce
                                    </button>
                                    <button
                                    onClick={() => setSelectedSauce("Pesto")}
                                    className={`px-6 py-3 rounded-xl border ${
                                      selectedSauce === "Pesto"
                                      ? "bg-red-600 text-white"
                                      : "bg-white"
                                    }`}
                                    >
                                      🌿 Pesto
                                      </button>
                              </div>
                            </div>
                            {/* Choose Cheese */}
                            <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
                              <h2 className="text-2xl font-bold">
                                4. Choose Your Cheese
                              </h2>
                              <div className="flex flex-wrap gap-4 mt-6">
                                <button
                                onClick={() => setSelectedCheese("No Cheese")}
                                className={`px-6 py-3 rounded-xl border ${
                                  selectedCheese === "No Cheese"
                                  ? "bg-red-600 text-white"
                                  : "bg-white"
                                }`}
                                >
                                  No Cheese
                                  </button>
                                  <button
                                  onClick={() => setSelectedCheese("Mozzarella")}
                                  className={`px-6 py-3 rounded-xl border ${
                                    selectedCheese === "Mozzarella"
                                    ? "bg-red-600 text-white"
                                    : "bg-white"
                                  }`}
                                  >
                                    🧀 Mozzarella
                                    </button>
                                    <button
                                     onClick={() => setSelectedCheese("Extra Cheese")}
                                     className={`px-6 py-3 rounded-xl border ${
                                      selectedCheese === "Extra Cheese"
                                      ? "bg-red-600 text-white"
                                      : "bg-white"
                                    }`}
                                    >
                                      🧀 Extra Cheese (+₹50)
                                     </button>
                                     <button
                                     onClick={() => setSelectedCheese("Cheese Blend")}
                                     className={`px-6 py-3 rounded-xl border ${
                                      selectedCheese === "Cheese Blend"
                                      ? "bg-red-600 text-white"
                                      : "bg-white"
                                    }`}
                                    >
                                      🧀 Cheese Blend (+₹70)
                                      </button>
                              </div>
                            </div>
                            {/* Choose Toppings */}
                            <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
                              <h2 className="text-2xl font-bold">
                                5. Choose Your Toppings
                                </h2>
                                <p className="text-gray-500 mt-2">
                                  You can select multiple toppings
                                  </p>
                                  <div className="flex flex-wrap gap-4 mt-6">
                                    {[
                                      "Mushroom",
                                      "Onion",
                                      "Capsicum",
                                      "Olives",
                                      "Sweet Corn",
                                      "Paneer",
                                      "Chicken",
                                    ].map((topping) => (
                                    <button
                                    key={topping}
                                    onClick={() => handleTopping(topping)}
                                    className={`px-6 py-3 rounded-xl border ${
                                      selectedToppings.includes(topping)
                                      ? "bg-red-600 text-white"
                                      : "bg-white"
                                    }`}
                                    >
                                      {topping}
                                      </button>
                                    ))}
                                  </div>
                            </div>
                            {/* Custom Pizza Summary */}
                            <div className="bg-white rounded-2xl shadow-lg p-8 mt-8 mb-10">
                              <h2 className="text-2xl font-bold mb-6">
                                Your Custom Pizza 🍕
                                </h2>
                                <div className="space-y-3 text-gray-700">
                                  <p>
                                    <span className="font-semibold">Base:</span>{" "}
                                    {selectedBase}
                                    </p>
                                    <p>
                                      <span className="font-semibold">Size:</span>{" "}
                                      {selectedSize}
                                    </p>
                                    <p>
                                      <span className="font-semibold">Sauce:</span>{" "}
                                      {selectedSauce}
                                    </p>
                                    <p>
                                      <span className="font-semibold">Cheese:</span>{" "}
                                      {selectedCheese}
                                    </p>
                                    <p>
                                      <span className="font-semibold">Toppings:</span>{" "}
                                      {selectedToppings.length > 0
                                      ? selectedToppings.join(", ")
                                      : "No Toppings"}
                                    </p>
                                    </div>
                                    <div className="flex items-center justify-between mt-8 pt-6 border-t">
                                      <h2 className="text-3xl font-bold text-red-600">
                                        ₹{customPrice}
                                        </h2>
                                        <button
                                         onClick={handleAddCustomPizza}
                                         className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition">
                                          Add Custom Pizza to Cart
                                        </button>
                                    </div>
                                </div>

                    </div>

                </div>

            </section>
        </>
    );
}

export default CreatePizza;