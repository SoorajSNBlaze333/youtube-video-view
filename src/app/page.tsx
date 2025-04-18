"use client";

import App from "./app";
import { UserProvider } from "./context/profile-context";
import { VideoProvider } from "./context/video-context";

export default function Home() {
  return (
    <UserProvider>
      <VideoProvider>
        <App />
      </VideoProvider>
    </UserProvider>
  );
}
