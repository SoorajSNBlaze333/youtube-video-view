import { createContext, ReactNode, useEffect, useState } from "react";

export type VideoTag = {
  id: string;
  displayName: string;
};

export type Video = {
  id: string;
  tags: VideoTag[];
  isLoading: boolean;
  // channelId: string;
  // likes: number;
  // dislikes: number;
  // currentSeekTime: number;
};

const initialData: Video = {
  id: "",
  tags: [],
  isLoading: false,
};

export const VideoContext = createContext<{
  video: Video;
  selectedTag: string;
}>({ video: initialData, selectedTag: "" });

export function VideoProvider({ children }: { children: ReactNode }) {
  const [video, setVideo] = useState<Video>(initialData);
  const [selectedTag, setSelectedTag] = useState<string>("");

  useEffect(() => {
    const fetchVideoDetails = async (videoId: string) => {
      setVideo((prev) => ({ ...prev, isLoading: true }));
      const response = await fetch(`/api/mock/videos/${videoId}`);
      const data = await response.json();
      setVideo({ ...data, isLoading: false });
      setSelectedTag(data.tags[0].id);
    };

    fetchVideoDetails("eIcWmL");
  }, []);

  return (
    <VideoContext.Provider value={{ video, selectedTag }}>
      {children}
    </VideoContext.Provider>
  );
}
