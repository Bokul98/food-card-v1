import Footer from "@/Components/Footer/Footer";
import "./globals.css";
import { Open_Sans } from 'next/font/google';
import Navbar from "@/Components/Navbar/Navbar";
import AuthProvider from "./AuthProvider";
import { Toaster } from "react-hot-toast";

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: "Food Cart",
  description: "A delicious food cart experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.className} bg-gray-50`}>
        <AuthProvider>
          <Navbar />
          <main className="w-full">{children}</main>
          <Footer />
          <Toaster position="top-center" reverseOrder={false} />
        </AuthProvider>
      </body>
    </html>
  );
}