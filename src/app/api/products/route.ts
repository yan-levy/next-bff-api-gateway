import { NextResponse } from "next/server";

// Route Handler
export async function GET() {
  const response = await fetch("http://localhost:8001/products", {
    next: {
      revalidate: 10, // dynamic caching
      //   tags: ["products"], // sob.demanda
    },
  });
  return NextResponse.json(await response.json());
}

// over fetching
// over requesting
