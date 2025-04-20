import { NextResponse } from "next/server";

export async function GET() {
  const video = {
    id: "eIcWmL",
    tags: [
      {
        id: "123",
        displayName: "All",
      },
      {
        id: "124",
        displayName: "From Channel A",
      },
      {
        id: "125",
        displayName: "From Channel B",
      },
      {
        id: "126",
        displayName: "From Channel C",
      },
      {
        id: "127",
        displayName: "From Channel D",
      },
      {
        id: "128",
        displayName: "From Channel E",
      },
      {
        id: "129",
        displayName: "From Channel F",
      },
    ],
  };
  return NextResponse.json(video);
}
