import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("food-cart");
    const collection = db.collection("foods");
    const foods = await collection.find({}).toArray();
    return NextResponse.json(foods, { status: 200 });
  } catch (error) {
    console.error("Error fetching food items:", error);
    return NextResponse.json(
      { message: "Error fetching food items" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { name, price, description } = await request.json();

    if (!name || !price || !description) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("food-cart");
    const collection = db.collection("foods");

    const result = await collection.insertOne({ name, price, description });

    return NextResponse.json(
      { message: "Food item added successfully", insertedId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding food item:", error);
    return NextResponse.json(
      { message: "Error adding food item" },
      { status: 500 }
    );
  }
}
