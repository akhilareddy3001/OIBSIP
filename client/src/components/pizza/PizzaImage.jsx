function PizzaImage({ pizza }) {
    return (
        <div>
            <img
                src= {pizza.image}
                alt={pizza.name}
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
            />
        </div>
    );
}

export default PizzaImage;