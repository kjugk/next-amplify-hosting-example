import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  return NextResponse.json({
    text: `This is a response text from server. You sent ${searchParams.get(
      "input"
    )} `,
    key: process.env.API_KEY,
  });
}
