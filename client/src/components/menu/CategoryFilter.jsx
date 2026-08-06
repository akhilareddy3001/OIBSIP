function CategoryFilter({
    selectedCategory,
    setSelectedCategory
}) {

    const categories = [
        "All",
        "Veg",
        "Non-Veg",
        "Cheese Burst"
    ];

    return (
        <div className="flex justify-center gap-4 mt-8 flex-wrap">

            {categories.map((category) => (

                <button
                    key={category}
                    onClick={() =>
                        setSelectedCategory(category)
                    }
                    className={`px-6 py-3 rounded-full font-semibold transition ${
                        selectedCategory === category
                            ? "bg-red-600 text-white"
                            : "bg-white border border-gray-300 hover:border-red-600 hover:text-red-600"
                    }`}
                >
                    {category}
                </button>

            ))}

        </div>
    );
}

export default CategoryFilter;