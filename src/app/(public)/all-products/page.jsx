'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AllMenuPage = () => {
  // State for all menu items, categories, and pagination
  const [foodItemsAll, setFoodItemsAll] = useState([]);
  const [categories, setCategories] = useState(['All', 'populer', 'regular']);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [perPageItem, setPerPageItem] = useState(8); // Default items per page
  const [totalPages, setTotalPages] = useState(0);

  // useEffect to fetch data when category or pagination state changes
  useEffect(() => {
    const fetchMenu = async () => {
      setLoading(true);
      setError(null);
      
      try {
        let apiUrl = '/api/all-products';
        
        // Add a query parameter for the selected category
        if (selectedCategory !== 'All') {
          apiUrl += `?display=${selectedCategory.toLowerCase()}`;
        }
        
        // Fetch data from your API
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error('Failed to fetch menu items');
        }
        const data = await res.json();
        
        // Assuming your API returns all items, we'll handle client-side pagination
        setFoodItemsAll(data);
        setTotalPages(Math.ceil(data.length / perPageItem));

      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchMenu();
  }, [selectedCategory, perPageItem]); // Re-fetch when these dependencies change
  
  // Calculate the items to display on the current page
  const indexOfLastItem = currentPage * perPageItem;
  const indexOfFirstItem = indexOfLastItem - perPageItem;
  const currentItems = foodItemsAll.slice(indexOfFirstItem, indexOfLastItem);
  
  // Handle page number generation
  const allPages = Array.from({ length: totalPages }, (_, i) => i);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl font-semibold text-gray-700">Loading menu...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-xl font-semibold text-red-600">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Featured Products
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome to Our Menu
            </span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our amazing collection of products. Find exactly what you're looking for.
          </p>
        </div>

        {/* Category Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1); // Reset to page 1 when category changes
              }}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 shadow-md"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {currentItems.map((item, idx) => (
            <div
              key={item.id || item._id || idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 flex flex-col transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              <Link href={`/all-products/${item._id}`} className="block">
                <div className="relative mb-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.682l-1.318-1.364a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.name}
                </h3>
                
                <p className="text-gray-600 mb-4 flex-1 leading-relaxed">
                  {item.desc || item.description || "Delicious and fresh product made with premium ingredients."}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ${item.price}
                  </span>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-600 text-sm">4.5</span>
                  </div>
                </div>

                <Link
                  href={`/all-products/${item._id}`}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold text-center transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {currentItems.length === 0 && !loading && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No items found</h3>
            <p className="text-gray-500">No items found in this category. Try selecting a different category.</p>
          </div>
        )}
      </div>
      
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16">
          <div className="flex gap-2">
            {allPages.map((p) => {
              const pageNumber = p + 1;
              return (
                <button
                  key={p}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`w-12 h-12 rounded-full font-semibold transition-all duration-300 transform hover:scale-110 ${
                    currentPage === pageNumber
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 shadow-md'
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-sm">Items per page:</span>
            <select
              name="pagePerItem"
              onChange={(e) => {
                setPerPageItem(Number(e.target.value));
                setCurrentPage(1); // Reset to page 1 when changing items per page
              }}
              defaultValue={perPageItem}
              id="items-per-page"
              className="px-4 py-2 border-2 border-gray-200 rounded-full text-sm bg-white focus:border-blue-300 focus:outline-none transition-colors"
            >
              {[4, 6, 8, 10, 20].map((op) => (
                <option key={op} value={op}>{op}</option>
              ))}
            </select>
          </div>
        </div>
      )}
    </section>
  );
};

export default AllMenuPage;