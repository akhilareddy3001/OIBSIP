import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/common/Navbar";
import pizzas from "../../data/pizzas";

import PizzaCard from "../../components/menu/PizzaCard";
import SearchBar from "../../components/menu/SearchBar";
import CategoryFilter from "../../components/menu/CategoryFilter";

function Menu() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    // Filter pizzas based on category + search
    const filteredPizzas = pizzas.filter((pizza) => {

        const matchesCategory =
            selectedCategory === "All" ||
            pizza.category === selectedCategory;

        const matchesSearch =
            pizza.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <Navbar />

            <section className="bg-orange-50 min-h-screen py-16">

                <div className="max-w-7xl mx-auto px-6">

                    {/* HEADER */}

                    <div className="grid grid-cols-1 md:grid-cols-4 items-center w-full">

                        <h1 className="text-5xl font-bold text-center md:col-start-2 md:col-span-2">
                            Our Pizza Menu
                        </h1>

                        <div className="justify-self-center md:justify-self-end md:col-start-4">

                            <Link to="/create-pizza">

                                <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold">
                                    🍕 Custom Pizza
                                </button>

                            </Link>

                        </div>

                    </div>


                    {/* SEARCH */}

                    <SearchBar
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />


                    {/* CATEGORY FILTER */}

                    <CategoryFilter
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />


                    {/* PIZZAS */}

                    {filteredPizzas.length > 0 ? (

                        <div className="grid md:grid-cols-3 gap-10 mt-14">

                            {filteredPizzas.map((pizza) => (

                                <PizzaCard
                                    key={pizza.id}
                                    pizza={pizza}
                                />

                            ))}

                        </div>

                    ) : (

                        <div className="text-center mt-16">

                            <h2 className="text-2xl font-bold">
                                No pizzas found 🍕
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Try another category or search.
                            </p>

                        </div>

                    )}

                </div>

            </section>
        </>
    );
}

export default Menu;