"use client";

import { UserProvider } from "./context/profile-context";
import { VideoProvider } from "./context/video-context";
import { ShortsProvider } from "./context/shorts-context";
import { RelatedVideosProvider } from "./context/related-videos-context";
import { CommentsProvider } from "./context/comment-context";
import { ThemeProvider } from "./context/theme-context";
import App from "./app";

export default function Home() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}
