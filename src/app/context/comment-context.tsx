import { createContext, ReactNode, useEffect, useState } from "react";
import { useVideo } from "../hooks/use-video";
import { CommentInput } from "../components/inputs/comment-input";

import { motion } from "motion/react";
import { Loader } from "../components/misc/loader";
import { CommentComponent } from "../components/comments/comment";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.15,
      type: "spring",
      staggerChildren: 0.1,
      bounce: 0.2,
    },
  },
};

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

const getCommentText = (comments: Comment[]) => {
  return `${comments.length} ${comments.length > 1 ? " Comments" : " Comment"}`;
};

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

  const renderComments = () => {
    if (!comments.comments.length || comments.isLoading) {
      return <Loader />;
    }
    return (
      <div className="mt-4">
        <p className="text-xl font-bold">{getCommentText(comments.comments)}</p>
        <CommentInput />
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6 mt-5"
        >
          {comments.comments.map((comment: Comment, index: number) => (
            <CommentComponent comment={comment} key={index} />
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <CommentsContext.Provider value={{ ...comments }}>
      {children}
      {renderComments()}
    </CommentsContext.Provider>
  );
}
