import { useComments } from "@/app/hooks/use-comments";
import { motion } from "motion/react";
import { CommentInput } from "../inputs/comment-input";
import { CommentComponent } from "./comment";
import { Comment } from "@/app/context/comment-context";
import { Loader } from "../misc/loader";

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

const getCommentText = (comments: Comment[]) => {
  return `${comments.length} ${comments.length > 1 ? " Comments" : " Comment"}`;
};

export const Comments = () => {
  const { comments, isLoading } = useComments();

  if (!comments.length || isLoading) {
    return <Loader />;
  }
  return (
    <div className="mt-4">
      <p className="text-xl font-bold">{getCommentText(comments)}</p>
      <CommentInput />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-6 mt-5"
      >
        {comments.map((comment: Comment, index: number) => (
          <CommentComponent comment={comment} key={index} />
        ))}
      </motion.div>
    </div>
  );
};
