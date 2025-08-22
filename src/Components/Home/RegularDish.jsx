"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const RegularDish = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRegularDishes = async () => {
      try {
        setLoading(true);
        // Fetch data from your API with the correct query parameter
        const response = await fetch("/api/all-products?display=regular");

        if (!response.ok) {
          throw new Error("Failed to fetch regular dishes");
        }

        const data = await response.json();
        setDishes(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRegularDishes();
  }, []); // The empty dependency array ensures this effect runs only once on mount

  // Conditional rendering for different states
  if (loading) {
    return (
      <div className="w-full py-8 text-center text-lg font-semibold">
        Loading regular dishes...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-8 text-center text-red-600 font-semibold">
        Error: {error}
      </div>
    );
  }

  if (!Array.isArray(dishes) || dishes.length === 0) {
    return (
      <div className="w-full py-8 text-center text-gray-500">
        No regular dishes found.
      </div>
    );
  }

  return (
    <section className="w-full py-10 px-2 md:px-0">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">
        Regular Dishes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {dishes.map((dish, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 flex flex-col items-center relative transition-all duration-300 transform hover:scale-105 border border-gray-100"
          >
            {/* Like Button */}
            <button className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group">
              <FaRegHeart className="text-lg text-red-500 group-hover:text-red-600" />
            </button>
            
            <img
              src={dish.image}
              alt={dish.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-primary/20 shadow-lg"
            />
            
            {/* Rating */}
            <div className="flex items-center mb-3 bg-yellow-50 px-3 py-1 rounded-full">
              <FaStar className="text-yellow-400 mr-1" />
              <span className="text-sm font-semibold text-gray-700">
                {dish.rating}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
              {dish.name}
            </h3>
            
            <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              {dish.price}
            </p>
            
            <p className="text-gray-600 text-sm text-center mb-6 leading-relaxed flex-1">
              {dish.desc}
            </p>
            
            <div className="flex gap-3 w-full">
              <Link
                href={`/dishDetails/${dish?._id}`}
                className="cursor-pointer flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                <MdOutlineShoppingCart className="text-lg" />
                Order
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RegularDish;