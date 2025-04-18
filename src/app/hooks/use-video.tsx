import { createContext, ReactNode, useContext } from "react";

export type Video = {
  id: string;
  channelId: string;
  likes: number;
  dislikes: number;
  currentSeekTime: number;
};

const VideoContext = createContext<
  | {
      video: Video;
    }
  | undefined
>(undefined);

export const useYoutube = () => {
  const ctx = useContext(VideoContext);

  if (!ctx) {
    throw new Error("useVideo must be used within a VideoProvider");
  }

  return ctx;
};

export default function VideoProvider({ children }: { children: ReactNode }) {
  // fetch video details here using the video id
  return (
    <VideoContext.Provider value={undefined}>{children}</VideoContext.Provider>
  );
}
