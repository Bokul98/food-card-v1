import AddFoodForm from "@/Components/form/AddFoodForm";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AddFoodPage() {
  const session = await getServerSession();
  
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Food Item</h1>
      <AddFoodForm />
    </div>
  );
}
