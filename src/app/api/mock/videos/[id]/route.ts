import { NextResponse } from "next/server";

export async function GET() {
  const videos = [
    {
      id: "RQcErk",
      thumbnail: "video-preview-1.jpg",
      duration: "38:46",
      title:
        "This is an amazing video. Click here to view this video. Please click on this video.",
      channel: {
        id: "8d4Kvp",
        name: "Channel",
        isVerified: true,
      },
      views: "341K views",
      posted: "1 hour",
      isNew: true,
    },
    {
      id: "e4B2yE",
      thumbnail: "video-preview-2.jpg",
      duration: "3:44",
      title:
        "This is an amazing video. Click here to view this video. Please click on this video.",
      channel: {
        id: "ZbDOuf",
        name: "Channel",
        isVerified: false,
      },
      views: "6.8M views",
      posted: "4 hours",
      isNew: true,
    },
    {
      id: "9Q7NOx",
      thumbnail: "video-preview-3.jpg",
      duration: "16:29",
      title:
        "This is an amazing video. Click here to view this video. Please click on this video.",
      channel: {
        id: "9YWG5K",
        name: "Channel",
        isVerified: false,
      },
      views: "904 views",
      posted: "1 day",
      isNew: true,
    },
    {
      id: "Qg8bR8",
      thumbnail: "video-preview-4.jpg",
      duration: "9:05",
      title:
        "This is an amazing video. Click here to view this video. Please click on this video.",
      channel: {
        id: "eXIEWt",
        name: "Channel",
        isVerified: true,
      },
      views: "97K views",
      posted: "2 months",
      isNew: false,
    },
    {
      id: "zdtwZh",
      thumbnail: "video-preview-5.jpg",
      duration: "50:05",
      title:
        "This is an amazing video. Click here to view this video. Please click on this video.",
      channel: {
        id: "5CwSqK",
        name: "Channel",
        isVerified: false,
      },
      views: "296K views",
      posted: "3 weeks",
      isNew: false,
    },
    {
      id: "wOywzM",
      thumbnail: "video-preview-6.jpg",
      duration: "01:31:49",
      title:
        "This is an amazing video. Click here to view this video. Please click on this video.",
      channel: {
        id: "RPfofC",
        name: "Channel",
        isVerified: true,
      },
      views: "4.2M views",
      posted: "1 month",
      isNew: false,
    },
    {
      id: "XVI1Pd",
      thumbnail: "video-preview-7.jpg",
      duration: "47:39",
      title:
        "This is an amazing video. Click here to view this video. Please click on this video.",
      channel: {
        id: "PPHMML",
        name: "Channel",
        isVerified: false,
      },
      views: "175 views",
      posted: "2 years",
      isNew: false,
    },
    {
      id: "fHIUcx",
      thumbnail: "video-preview-8.jpg",
      duration: "29:13",
      title:
        "This is an amazing video. Click here to view this video. Please click on this video.",
      channel: {
        id: "bvbSwU",
        name: "Channel",
        isVerified: true,
      },
      views: "6K views",
      posted: "5 years",
      isNew: false,
    },
    {
      id: "oFXo7Q",
      thumbnail: "video-preview-9.jpg",
      duration: "18:40",
      title:
        "This is an amazing video. Click here to view this video. Please click on this video.",
      channel: {
        id: "SkQ66B",
        name: "Channel",
        isVerified: true,
      },
      views: "26K views",
      posted: "5 months",
      isNew: false,
    },
    {
      id: "Zu1VpG",
      thumbnail: "video-preview-10.jpg",
      duration: "4:10",
      title:
        "This is an amazing video. Click here to view this video. Please click on this video.",
      channel: {
        id: "ddsh3q",
        name: "Channel",
        isVerified: false,
      },
      views: "568 views",
      posted: "3 weeks",
      isNew: false,
    },
  ];
  return NextResponse.json({ videos });
}
