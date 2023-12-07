import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  const response = await fetch(
    `http://localhost:8001/products/${params.productId}`,
    {
      next: {
        revalidate: 10, // dynamic caching
        //   tags: ["products"], // sob.demanda
      },
    }
  );
  return NextResponse.json(await response.json());
}
