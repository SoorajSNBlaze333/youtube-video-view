import {
  ChevronDownIcon,
  ChevronUpIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import Profile from "../misc/profile";
import { motion } from "motion/react";
import { type Comment } from "@/app/context/comment-context";
import { useEffect, useState } from "react";

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
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

export const CommentComponent = ({ comment }: { comment: Comment }) => {
  const [isRepliesSectionOpen, setIsRepliesSectionOpen] = useState(false);
  const [replies, setReplies] = useState<{
    isLoading: boolean;
    replies: Comment[];
  }>({ isLoading: false, replies: [] });

  const handleRepliesSection = () => {
    setIsRepliesSectionOpen((prev) => !prev);
  };

  useEffect(() => {
    const fetchComments = async (commentId: string) => {
      setReplies((prev) => ({ ...prev, isLoading: true }));
      const response = await fetch(`/api/mock/replies/${commentId}`);
      const data = await response.json();
      setReplies({
        isLoading: false,
        replies: data.replies.slice(0, comment.replies),
      });
    };

    if (isRepliesSectionOpen && !replies.replies.length && comment.id) {
      fetchComments(comment.id);
    }
  }, [comment, isRepliesSectionOpen, replies.replies.length]);

  return (
    <motion.div
      variants={item}
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
      <div className="flex flex-col justify-center items-start w-full gap-1">
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
        {comment.replies > 0 && (
          <button
            className="hover:bg-blue-100 text-blue-600 p-2 rounded-full cursor-pointer flex items-center gap-2 py-2 px-3"
            onClick={handleRepliesSection}
          >
            {isRepliesSectionOpen ? (
              <ChevronUpIcon className="size-5" />
            ) : (
              <ChevronDownIcon className="size-5" />
            )}
            <p className="text-sm font-bold">{comment.replies} replies</p>
          </button>
        )}
        {isRepliesSectionOpen && replies.replies.length > 0 && (
          <div className="flex flex-col justify-center items-start w-full gap-6">
            {replies.replies.map((reply: Comment, index: number) => (
              <CommentComponent comment={reply} key={index} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
