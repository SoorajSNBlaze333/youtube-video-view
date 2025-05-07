import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const comments = [
    {
      picture: "https://i.pravatar.cc/200",
      commenter: "@williampage",
      commented: "2 months ago",
      comment:
        "Becoming an adult is great because you can do whatever you want.",
      likes: 21,
      dislikes: 0,
    },
    {
      picture: "",
      commenter: "@joelroywilliam",
      commented: "1 year ago",
      comment: "You are bringing unresolved emotion into everything.",
      likes: 110,
      dislikes: 0,
    },
    {
      picture: "",
      commenter: "@samuelcobbwilliam",
      commented: "4 years ago",
      comment:
        "Do you mind waiting an extra hour so I can read more of my book?",
      likes: 300,
      dislikes: 0,
    },
    {
      picture: "https://i.pravatar.cc/200",
      commenter: "@keithcastrowilliam",
      commented: "2 years ago",
      comment:
        "The mouse was so hungry he ran across the kitchen floor without even looking for humans.",
      likes: 2,
      dislikes: 0,
    },
    {
      picture: "",
      commenter: "@joelroywilliam",
      commented: "1 year ago",
      comment: "You are bringing unresolved emotion into everything.",
      likes: 110,
      dislikes: 0,
    },
    {
      picture: "",
      commenter: "@samuelcobbwilliam",
      commented: "4 years ago",
      comment:
        "Do you mind waiting an extra hour so I can read more of my book?",
      likes: 300,
      dislikes: 0,
    },
    {
      picture: "https://i.pravatar.cc/200",
      commenter: "@keithcastrowilliam",
      commented: "2 years ago",
      comment:
        "The mouse was so hungry he ran across the kitchen floor without even looking for humans.",
      likes: 2,
      dislikes: 0,
    },
    {
      picture: "",
      commenter: "@joelroywilliam",
      commented: "1 year ago",
      comment: "You are bringing unresolved emotion into everything.",
      likes: 110,
      dislikes: 0,
    },
    {
      picture: "https://i.pravatar.cc/200",
      commenter: "@keithcastrowilliam",
      commented: "2 years ago",
      comment:
        "The mouse was so hungry he ran across the kitchen floor without even looking for humans.",
      likes: 2,
      dislikes: 0,
    },
  ];

  const id = (await params).id;
  const commentsResponse = {
    videoId: id,
    comments,
  };
  return NextResponse.json(commentsResponse);
}
