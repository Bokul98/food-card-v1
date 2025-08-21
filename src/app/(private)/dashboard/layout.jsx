import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <nav className="mt-4">
          <Link href="/dashboard" className="block p-4 hover:bg-gray-700">
            Home
          </Link>
          <Link
            href="/dashboard/add-food"
            className="block p-4 hover:bg-gray-700"
          >
            Add Food
          </Link>
        </nav>
      </div>
      <div className="flex-1 p-8">{children}</div>
    </div>
  );
}
