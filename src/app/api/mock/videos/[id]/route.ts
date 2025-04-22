import { NextResponse } from "next/server";

const tags = [
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
];
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

export async function GET() {
  const video = {
    id: "eIcWmL",
    tags,
    related_shorts: shorts,
  };
  return NextResponse.json(video);
}
