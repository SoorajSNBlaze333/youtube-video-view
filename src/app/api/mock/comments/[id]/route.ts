import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const comments = [
    {
      id: "hnamuy",
      picture: "https://i.pravatar.cc/200",
      commenter: "@williampage",
      commented: "2 months ago",
      comment:
        "Becoming an adult is great because you can do whatever you want.",
      likes: 21,
      dislikes: 0,
      replies: 7,
    },
    {
      id: "6hczcr",
      picture: "",
      commenter: "@joelroywilliam",
      commented: "1 year ago",
      comment: "You are bringing unresolved emotion into everything.",
      likes: 110,
      dislikes: 0,
      replies: 0,
    },
    {
      id: "nydkc8",
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
      id: "q2x041",
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
      id: "juxxrs",
      picture: "",
      commenter: "@joelroywilliam",
      commented: "1 year ago",
      comment: "You are bringing unresolved emotion into everything.",
      likes: 110,
      dislikes: 0,
      replies: 0,
    },
    {
      id: "ctqx1i",
      picture: "",
      commenter: "@samuelcobbwilliam",
      commented: "4 years ago",
      comment:
        "Do you mind waiting an extra hour so I can read more of my book?",
      likes: 300,
      dislikes: 0,
      replies: 2,
    },
    {
      id: "fyjqc7",
      picture: "https://i.pravatar.cc/200",
      commenter: "@keithcastrowilliam",
      commented: "2 years ago",
      comment:
        "The mouse was so hungry he ran across the kitchen floor without even looking for humans.",
      likes: 2,
      dislikes: 0,
      replies: 1,
    },
    {
      id: "6l1qsg",
      picture: "",
      commenter: "@joelroywilliam",
      commented: "1 year ago",
      comment: "You are bringing unresolved emotion into everything.",
      likes: 110,
      dislikes: 0,
      replies: 0,
    },
  ];

  const id = (await params).id;
  const commentsResponse = {
    videoId: id,
    comments,
  };
  return NextResponse.json(commentsResponse);
}
