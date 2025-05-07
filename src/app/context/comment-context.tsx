import { createContext, ReactNode, useEffect, useState } from "react";
import { useVideo } from "../hooks/use-video";
import { CommentInput } from "../components/inputs/comment-input";
import {
  HandThumbDownIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import { motion } from "motion/react";
import Profile from "../components/misc/profile";

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

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export type Comment = {
  picture: string;
  commenter: string;
  commented: string;
  comment: string;
  likes: number;
  dislikes: number;
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

const colors = [
  "bg-red-400",
  "bg-blue-400",
  "bg-pink-400",
  "bg-emerald-400",
  "bg-green-400",
  "bg-orange-400",
];

const getRandomBackground = () => {
  const num = Math.floor(Math.random() * colors.length);
  return colors[num];
};

export function CommentsProvider({ children }: { children: ReactNode }) {
  const {
    video: { id },
    selectedTag,
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
  }, [id, selectedTag]);

  const renderComment = (comment: Comment, index: number) => {
    return (
      <motion.div
        variants={item}
        key={index}
        className="flex w-full justify-start items-start gap-4"
      >
        {comment.picture.length ? (
          <Profile url={comment.picture} size="10" />
        ) : (
          <div
            className={`h-10 w-10 aspect-square ${getRandomBackground()} text-white font-semibold text-lg flex justify-center items-center rounded-full cursor-pointer`}
          >
            {comment.commenter.toUpperCase().charAt(1)}
          </div>
        )}
        <div className="flex flex-col w-full gap-1">
          <span className="flex justify-start items-center gap-2">
            <p className="text-gray-700 text-sm font-semibold">
              {comment.commenter}
            </p>
            <p className="text-xs text-gray-600">{comment.commented}</p>
          </span>
          <p className="text-sm">{comment.comment}</p>
          <div className="flex justify-start items-center gap-2">
            <button className="inline-flex justify-center items-center gap-1">
              <HandThumbUpIcon className="size-5" />
              <p className="text-xs text-gray-600 ">{comment.likes}</p>
            </button>
            <button className="inline-flex justify-center items-center gap-1">
              <HandThumbDownIcon className="size-5" />
              {comment.dislikes > 0 && (
                <p className="text-xs text-gray-600">{comment.dislikes}</p>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  const renderComments = () => {
    if (!comments.comments.length || comments.isLoading) {
      return <div>Loading...</div>;
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
          {comments.comments.map(renderComment)}
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
