"use client";

import { useEffect, useState } from "react";
import App from "./app";
import { UserProvider } from "./context/profile-context";
import { VideoProvider } from "./context/video-context";

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
        <App />
      </VideoProvider>
    </UserProvider>
  );
}
