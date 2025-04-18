import { createContext, ReactNode } from "react";

export type Video = {
  id: string;
  channelId: string;
  likes: number;
  dislikes: number;
  currentSeekTime: number;
};

export const VideoContext = createContext<
  | {
      video: Video;
    }
  | undefined
>(undefined);

export function VideoProvider({ children }: { children: ReactNode }) {
  // fetch video details here using the video id
  return (
    <VideoContext.Provider value={undefined}>{children}</VideoContext.Provider>
  );
}
