import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const replies = [
    {
      id: "hyivh4",
      picture: "https://i.pravatar.cc/200",
      commenter: "@williampage",
      commented: "2 months ago",
      comment:
        "Becoming an adult is great because you can do whatever you want.",
      likes: 21,
      dislikes: 0,
      replies: 0,
    },
    {
      id: "tjwgzs",
      picture: "",
      commenter: "@joelroywilliam",
      commented: "1 year ago",
      comment: "You are bringing unresolved emotion into everything.",
      likes: 110,
      dislikes: 0,
      replies: 0,
    },
    {
      id: "g39q9l",
      picture: "",
      commenter: "@samuelcobbwilliam",
      commented: "4 years ago",
      comment:
        "Do you mind waiting an extra hour so I can read more of my book?",
      likes: 300,
      dislikes: 0,
      replies: 0,
    },
    {
      id: "nps0rh",
      picture: "https://i.pravatar.cc/200",
      commenter: "@keithcastrowilliam",
      commented: "2 years ago",
      comment:
        "The mouse was so hungry he ran across the kitchen floor without even looking for humans.",
      likes: 2,
      dislikes: 0,
      replies: 0,
    },
    {
      id: "buo4oa",
      picture: "",
      commenter: "@joelroywilliam",
      commented: "1 year ago",
      comment: "You are bringing unresolved emotion into everything.",
      likes: 110,
      dislikes: 0,
      replies: 0,
    },
    {
      id: "1hgcnm",
      picture: "",
      commenter: "@samuelcobbwilliam",
      commented: "4 years ago",
      comment:
        "Do you mind waiting an extra hour so I can read more of my book?",
      likes: 300,
      dislikes: 0,
      replies: 0,
    },
    {
      id: "cks9ra",
      picture: "https://i.pravatar.cc/200",
      commenter: "@keithcastrowilliam",
      commented: "2 years ago",
      comment:
        "The mouse was so hungry he ran across the kitchen floor without even looking for humans.",
      likes: 2,
      dislikes: 0,
      replies: 0,
    },
    {
      id: "8r7uty",
      picture: "",
      commenter: "@joelroywilliam",
      commented: "1 year ago",
      comment: "You are bringing unresolved emotion into everything.",
      likes: 110,
      dislikes: 0,
      replies: 0,
    },
    {
      id: "0ysiw9",
      picture: "https://i.pravatar.cc/200",
      commenter: "@keithcastrowilliam",
      commented: "2 years ago",
      comment:
        "The mouse was so hungry he ran across the kitchen floor without even looking for humans.",
      likes: 2,
      dislikes: 0,
      replies: 0,
    },
  ];

  const id = (await params).id;
  const repliesResponse = {
    videoId: id,
    replies,
  };
  return NextResponse.json(repliesResponse);
}
