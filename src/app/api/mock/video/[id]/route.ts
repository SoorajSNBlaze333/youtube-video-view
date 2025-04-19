import { NextResponse } from "next/server";

const videos = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" },
];

export async function GET() {
  return NextResponse.json(videos);
}
