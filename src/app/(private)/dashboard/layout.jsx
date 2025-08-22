"use client"
import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <>
      {/* Remove Navbar for dashboard pages */}
      <style jsx global>{`
        nav.main-navbar, footer {
          display: none !important;
        }
      `}</style>
      
      <div className="flex min-h-screen">
        <div className="w-64 bg-gray-800 text-white">
          <div className="p-4 border-b border-gray-700">
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>
          <nav className="mt-4">
            <Link href="/dashboard" className="flex items-center px-4 py-3 hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Dashboard Home
            </Link>
            <Link href="/dashboard/add-food" className="flex items-center px-4 py-3 hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add Food
            </Link>
            <Link href="/" className="flex items-center px-4 py-3 hover:bg-gray-700 mt-auto border-t border-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Home
            </Link>
          </nav>
        </div>
        <div className="flex-1 p-8">{children}</div>
      </div>
    </>
  );
}
