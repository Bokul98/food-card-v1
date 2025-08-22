"use client";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { UserNav } from "./UserNav";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand Name */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
              ProductApp
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex gap-8 items-center">
            <li>
              <Link
                href="/"
                className={`font-semibold transition-all duration-300 hover:text-blue-600 relative ${
                  pathname === "/" ? "text-blue-600" : "text-gray-700"
                }`}
              >
                Home
                {pathname === "/" && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
                )}
              </Link>
            </li>
            <li>
              <Link
                href="/all-products"
                className={`font-semibold transition-all duration-300 hover:text-blue-600 relative ${
                  pathname === "/all-products" ? "text-blue-600" : "text-gray-700"
                }`}
              >
                All Products
                {pathname === "/all-products" && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
                )}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`font-semibold transition-all duration-300 hover:text-blue-600 relative ${
                  pathname === "/about" ? "text-blue-600" : "text-gray-700"
                }`}
              >
                About
                {pathname === "/about" && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
                )}
              </Link>
            </li>
            {session && (
              <li>
                <Link
                  href="/dashboard/add-product"
                  className={`font-semibold transition-all duration-300 hover:text-blue-600 relative ${
                    pathname.startsWith("/dashboard") ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  Dashboard
                  {pathname.startsWith("/dashboard") && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
                  )}
                </Link>
              </li>
            )}
          </ul>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center gap-4">
            {session ? (
              <UserNav />
            ) : (
              <Link
                href="/login"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-100">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${
                  pathname === "/"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                Home
              </Link>
              <Link
                href="/all-products"
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${
                  pathname === "/products"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                All Products
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${
                  pathname === "/about"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                About
              </Link>
              {session && (
                <Link
                  href="/dashboard/add-product"
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${
                    pathname.startsWith("/dashboard")
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  Dashboard
                </Link>
              )}
              
              {/* Mobile Auth */}
              <div className="pt-4 pb-2">
                {session ? (
                  <div className="px-4">
                    <UserNav />
                  </div>
                ) : (
                  <div className="px-4">
                    <Link
                      href="/login"
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;