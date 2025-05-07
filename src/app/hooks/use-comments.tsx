import { useContext } from "react";
import { CommentsContext } from "../context/comment-context";

export const useComments = () => {
  const ctx = useContext(CommentsContext);

  if (!ctx) {
    throw new Error("useComments must be used within a CommentsProvider");
  }

  return ctx;
};
