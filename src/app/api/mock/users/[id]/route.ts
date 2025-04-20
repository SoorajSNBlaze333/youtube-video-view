import { NextResponse } from "next/server";

export async function GET() {
  const user = {
    id: "108200847501413324737",
    name: "John Doe",
    given_name: "John",
    family_name: "Doe",
    email: "john.doe@example.com",
    picture: "https://i.pravatar.cc/200",
    locale: "en-US",
  };
  return NextResponse.json(user);
}
