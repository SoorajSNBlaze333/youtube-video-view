import { createContext, ReactNode, useEffect, useState } from "react";

export type VideoTag = {
  id: string;
  displayName: string;
};

export type Channel = {
  name: string;
  subscribers: string;
};

export type Video = {
  id: string;
  tags: VideoTag[];
  title: string;
  channel: Channel;
  isLoading: boolean;
};

const initialData: Video = {
  id: "",
  tags: [],
  title: "",
  channel: {
    name: "",
    subscribers: "",
  },
  isLoading: false,
};

export const VideoContext = createContext<{
  video: Video;
  selectedTag: string;
  handleTagSelection: (tag: string) => void;
}>({ video: initialData, selectedTag: "", handleTagSelection: () => {} });

export function VideoProvider({ children }: { children: ReactNode }) {
  const [video, setVideo] = useState<Video>(initialData);
  const [selectedTag, setSelectedTag] = useState<string>("");

  useEffect(() => {
    const fetchVideoDetails = async (videoId: string) => {
      setVideo((prev) => ({ ...prev, isLoading: true }));
      const response = await fetch(`/api/mock/video/${videoId}`);
      const data = await response.json();
      setVideo({ ...data, isLoading: false });
      setSelectedTag(data.tags[0].id);
    };

    fetchVideoDetails("eIcWmL");
  }, []);

  const handleTagSelection = (selectedTag: string) => {
    setSelectedTag(selectedTag);
  };

  return (
    <VideoContext.Provider value={{ video, selectedTag, handleTagSelection }}>
      {children}
    </VideoContext.Provider>
  );
}
