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
    <section className="w-full py-20 px-4 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-medium tracking-wider uppercase text-sm">
            Our Menu
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Regular Dishes
          </h2>
          <div className="mt-4 w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {dishes.slice(0, 6).map((dish) => (
            <div
              key={dish._id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container with Gradient Overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Quick Actions - Appear on Hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
                    <FaRegHeart className="text-lg text-rose-500" />
                  </button>
                  <button className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
                    <MdOutlineShoppingCart className="text-lg text-blue-600" />
                  </button>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 left-4 flex items-center bg-white px-2 py-1 rounded-lg shadow-md">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="text-sm font-semibold">{dish.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {dish.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-blue-600">
                    ${typeof dish.price === 'number' ? dish.price.toFixed(2) : dish.price}
                  </p>
                  <Link 
                    href={`/all-products/${dish._id}`}
                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
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