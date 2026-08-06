function SearchBar({
    searchTerm,
    setSearchTerm
}) {

    return (
        <div className="max-w-xl mx-auto mt-10">

            <input
                type="text"
                value={searchTerm}
                onChange={(e) =>
                    setSearchTerm(e.target.value)
                }
                placeholder="Search pizzas..."
                className="w-full border border-gray-300 px-5 py-4 rounded-xl outline-none focus:border-red-600 shadow-sm"
            />

        </div>
    );
}

export default SearchBar;