"use client";

import { useEffect, useState } from "react";
import { UserProvider } from "./context/profile-context";
import { VideoProvider } from "./context/video-context";
import { ShortsProvider } from "./context/shorts-context";
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
          <App />
        </ShortsProvider>
      </VideoProvider>
    </UserProvider>
  );
}
