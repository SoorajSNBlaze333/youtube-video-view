import { createContext, ReactNode, useEffect, useState } from "react";
import { useVideo } from "../hooks/use-video";

export type Comment = {
  id: string;
  picture: string;
  commenter: string;
  commented: string;
  comment: string;
  likes: number;
  dislikes: number;
  replies: number;
};

export type Comments = {
  videoId: string;
  comments: Comment[];
  isLoading: boolean;
};

const initialData = {
  videoId: "",
  comments: [],
  isLoading: false,
};

export const CommentsContext = createContext<Comments>(initialData);

export function CommentsProvider({ children }: { children: ReactNode }) {
  const {
    video: { id },
  } = useVideo();
  const [comments, setComments] = useState<Comments>(initialData);

  useEffect(() => {
    const fetchComments = async (videoId: string) => {
      setComments((prev) => ({ ...prev, isLoading: true }));
      const response = await fetch(`/api/mock/comments/${videoId}`);
      const data = await response.json();
      setComments({ ...data, isLoading: false });
    };

    if (id) {
      fetchComments(id);
    }
  }, [id]);

  return (
    <CommentsContext.Provider value={{ ...comments }}>
      {children}
    </CommentsContext.Provider>
  );
}
