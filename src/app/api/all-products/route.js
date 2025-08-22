import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";



export async function POST(request) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json(
        { error: "You must be logged in to add menu items" },
        { status: 401 }
      );
    }

    const client = await clientPromise;
    const db = client.db("foodCartUser");
    const menuCollection = db.collection("allMenu");

    const data = await request.json();
    const { name, price, description, image } = data;

    if (!name || !price || !description || !image) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const result = await menuCollection.insertOne({
      name,
      price,
      description,
      image,
      isPopular: data.isPopular || false,
      createdAt: new Date(),
      createdBy: session.user.email,
    });

    return NextResponse.json(
      { message: "Food item added successfully", id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to add menu item" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db("foodCartUser");
    const menuCollection = db.collection("allMenu");
    
    const { searchParams } = new URL(request.url);
    const display = searchParams.get("display"); 
    
    let query = {};
    if (display === 'populer') {
      query = { isPopular: true };
    } else if (display === 'regular') {
      query = { isPopular: { $ne: true } };
    }
    
    const menu = await menuCollection.find(query).toArray();
    console.log('Query:', query);
    console.log('Found items:', menu.length);
    return NextResponse.json(menu);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Unable to fetch menu" }, { status: 500 });
  }
}