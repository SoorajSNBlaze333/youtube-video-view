import { createContext, ReactNode, useEffect, useState } from "react";
import { useVideo } from "../hooks/use-video";

export type Short = {
  id: string;
  thumbnail: string;
  title: string;
  views: string;
};

export type Shorts = {
  videoId: string;
  shorts: Short[];
  isLoading: boolean;
};

const initialData = {
  videoId: "",
  shorts: [],
  isLoading: false,
};

export const ShortsContext = createContext<Shorts>(initialData);

export function ShortsProvider({ children }: { children: ReactNode }) {
  const {
    video: { id },
  } = useVideo();
  const [shortsData, setShortsData] = useState<Shorts>(initialData);

  useEffect(() => {
    const fetchShorts = async (videoId: string) => {
      setShortsData((prev) => ({ ...prev, isLoading: true }));
      const response = await fetch(`/api/mock/shorts/${videoId}`);
      const data = await response.json();
      setShortsData({ ...data, isLoading: false });
    };

    if (id) {
      fetchShorts(id);
    }
  }, [id]);

  return (
    <ShortsContext.Provider value={{ ...shortsData }}>
      {children}
    </ShortsContext.Provider>
  );
}
