import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const shorts = [
    {
      id: "1",
      thumbnail: "",
      title: "This is a great Short! Awesome",
      views: "100K",
    },
    {
      id: "2",
      thumbnail: "",
      title: "This is a great Short 2! Awesome",
      views: "3.1M",
    },
    {
      id: "3",
      thumbnail: "",
      title: "This is a great Short 3! Awesome",
      views: "524",
    },
  ];
  const shortsResponse = {
    videoId: params?.id,
    shorts,
  };
  return NextResponse.json(shortsResponse);
}
