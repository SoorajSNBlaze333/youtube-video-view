import { createContext, ReactNode, useEffect, useState } from "react";
import { useVideo } from "../hooks/use-video";

export type RelatedVideo = {
  id: string;
  thumbnail: string;
  duration: string;
  title: string;
  channel: {
    id: string;
    name: string;
    isVerified: boolean;
  };
  views: string;
  posted: string;
  isNew: boolean;
};

export type RelatedVideos = {
  videos: RelatedVideo[];
  isLoading: boolean;
};

const initialData: RelatedVideos = {
  videos: [],
  isLoading: false,
};

export const RelatedVideosContext = createContext<{
  relatedVideos: {
    videos: RelatedVideo[];
    isLoading: boolean;
  };
}>({ relatedVideos: initialData });

export function RelatedVideosProvider({ children }: { children: ReactNode }) {
  const {
    video: { id, isLoading },
  } = useVideo();
  const [relatedVideos, setRelatedVideos] =
    useState<RelatedVideos>(initialData);

  useEffect(() => {
    const fetchVideos = async (videoId: string) => {
      setRelatedVideos((prev) => ({ ...prev, isLoading: true }));
      const response = await fetch(`/api/mock/videos/${videoId}`);
      const data = await response.json();
      setRelatedVideos({ ...data, isLoading: false });
    };

    if (!isLoading && id) fetchVideos(id);
  }, [id, isLoading]);

  return (
    <RelatedVideosContext.Provider value={{ relatedVideos }}>
      {children}
    </RelatedVideosContext.Provider>
  );
}
