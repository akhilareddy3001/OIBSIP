import { Link } from "react-router-dom";

function PizzaCard({ pizza }) {

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition hover:scale-105">

      {/* Pizza Image */}
      <img
        src={pizza.image}
        alt={pizza.name}
        className="w-full h-60 object-cover"
      />

      <div className="p-6">

        {/* Pizza Name */}
        <h3 className="text-2xl font-bold">
          {pizza.name}
        </h3>

        {/* Category */}
        <p className="text-gray-500 mt-1">
          {pizza.category}
        </p>

        {/* Rating */}
        <p className="text-yellow-500 mt-2">
          ⭐ {pizza.rating}
        </p>

        <div className="flex justify-between items-center mt-6">

          {/* Price */}
          <span className="text-red-600 text-2xl font-bold">
            ₹{pizza.price}
          </span>

          {/* MongoDB ID */}
          <Link
            to={`/pizza/${pizza._id}`}
            className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
}

export default PizzaCard;