import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const random = Math.floor(Math.random() * 10000);

  return NextResponse.json({
    text: `This is a response text from server. ${random}`,
    key: process.env.API_KEY,
  });
}
