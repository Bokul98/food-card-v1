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
    <section className="w-full bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Featured Selection
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Regular Dishes
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {dishes.slice(0, 6).map((dish) => (
            <div
              key={dish._id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 flex flex-col relative transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative w-full h-48 mb-6 overflow-hidden rounded-xl">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group">
                  <FaRegHeart className="text-lg text-red-500 group-hover:text-red-600" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{dish.name}</h3>
                  <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="text-sm font-semibold text-gray-700">
                      {dish.rating}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{dish.desc}</p>

                <div className="mt-auto space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      ${dish.price}
                    </p>
                    <button className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                      <MdOutlineShoppingCart className="text-xl" />
                    </button>
                  </div>

                  <Link 
                    href={`/all-products/${dish._id}`}
                    className="block w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/all-products"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            View All Products
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RegularDish;