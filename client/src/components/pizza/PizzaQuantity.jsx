function PizzaQuantity({quantity, setQuantity}) {

    return (
        <div className="flex gap-5 items-center mt-4">
            <button
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            className="bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded-lg"
            > 
               -
            </button>
            <span className="text-2xl font-bold">
                {quantity}
            </span>
            <button
            onClick={() => setQuantity(quantity + 1)}
            className="bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded-lg"
            >
                +
            </button>
        </div>

    );

}

export default PizzaQuantity;