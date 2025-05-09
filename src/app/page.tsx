"use client";

import { useEffect, useState } from "react";
import { UserProvider } from "./context/profile-context";
import { VideoProvider } from "./context/video-context";
import { ShortsProvider } from "./context/shorts-context";
import { RelatedVideosProvider } from "./context/related-videos-context";
import { CommentsProvider } from "./context/comment-context";
import App from "./app";

export default function Home() {
  const [darkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <UserProvider>
      <VideoProvider>
        <ShortsProvider>
          <RelatedVideosProvider>
            <CommentsProvider>
              <App />
            </CommentsProvider>
          </RelatedVideosProvider>
        </ShortsProvider>
      </VideoProvider>
    </UserProvider>
  );
}
