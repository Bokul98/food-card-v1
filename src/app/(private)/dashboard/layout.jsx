"use client"
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Hide main navbar */}
      <style jsx global>{`
        nav.main-navbar,
        footer {
          display: none !important;
        }
      `}</style>
      
      <div className="flex min-h-screen relative bg-gray-50">
        {/* Sidebar - Desktop */}
        <div className={`fixed md:static inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out z-30`}>
          <div className="w-64 h-full bg-gray-800 text-white flex flex-col">
            <div className="p-4 border-b border-gray-700 flex items-center justify-between">
              <h1 className="text-2xl font-bold">Product App</h1>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="md:hidden text-white hover:text-gray-300"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 py-4 space-y-1">
              <Link 
                href="/dashboard" 
                className="flex items-center px-4 py-3 hover:bg-gray-700 transition-colors duration-200 rounded-lg mx-2"
                onClick={() => setSidebarOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span className="text-sm font-medium">Dashboard Home</span>
              </Link>
              <Link 
                href="/dashboard/add-food" 
                className="flex items-center px-4 py-3 hover:bg-gray-700 transition-colors duration-200 rounded-lg mx-2"
                onClick={() => setSidebarOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Add Food</span>
              </Link>

              <Link 
                href="/" 
                className="flex items-center px-4 py-3 hover:bg-gray-700 transition-colors duration-200 rounded-lg mx-2 mt-1"
                onClick={() => setSidebarOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Back to Home</span>
              </Link>
            </nav>
            <div className="border-t border-gray-700 p-4">
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Mobile Header */}
          <div className="md:hidden bg-gray-800 text-white p-4 flex items-center justify-between sticky top-0 z-20 dashboard-nav">
            <h1 className="text-xl font-bold">Product App</h1>
            <button 
              onClick={() => setSidebarOpen(true)} 
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors duration-200"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Page Content */}
          <div className="p-4 md:p-8">
            {children}
          </div>
        </div>

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-20"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>
    </>
  );
}
