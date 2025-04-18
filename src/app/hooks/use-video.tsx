import { useContext } from "react";
import { VideoContext } from "../context/video-context";

export const useVideo = () => {
  const ctx = useContext(VideoContext);

  if (!ctx) {
    throw new Error("useVideo must be used within a VideoProvider");
  }

  return ctx;
};
