'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function ProductDetails({ params }) {
  const { data: session } = useSession();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/all-products/${params.id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl font-semibold text-gray-700">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="text-center text-red-600">
          <p className="text-xl font-semibold">{error}</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="text-center text-gray-600">
          <p className="text-xl font-semibold">Product not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="md:flex">
          {/* Product Image */}
          <div className="md:flex-shrink-0">
            <img
              className="h-96 w-full object-cover md:w-96"
              src={product.image}
              alt={product.name}
            />
          </div>
          
          {/* Product Details */}
          <div className="p-8">
            <div className="text-sm font-semibold text-blue-600 mb-1">
              {product.isPopular ? 'Popular Choice' : 'Regular Menu'}
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
            
            <div className="text-2xl font-bold text-blue-600 mb-4">
              ${product.price.toFixed(2)}
            </div>
            
            <div className="prose prose-blue max-w-none mb-6">
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Product Meta Information */}
            <div className="border-t border-gray-200 pt-4 space-y-4">
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Added on {new Date(product.createdAt).toLocaleDateString()}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-6">
                {session ? (
                  // Logged in user sees both buttons
                  <>
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition duration-300 transform hover:scale-105">
                      Add to Cart
                    </button>
                    <button className="flex-1 border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 transform hover:scale-105">
                      Buy Now
                    </button>
                  </>
                ) : (
                  // Non-logged in user sees login button
                  <Link 
                    href={`/login?callbackUrl=/products/${params.id}`}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition duration-300 transform hover:scale-105 text-center"
                  >
                    Login to Order
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
