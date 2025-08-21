import AddProductForm from "@/Components/form/AddProductForm";

export default function AddProductPage() {
  return (
    <section className="mt-8">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">
        Add New Product
      </h1>
      <AddProductForm />
    </section>
  );
}
