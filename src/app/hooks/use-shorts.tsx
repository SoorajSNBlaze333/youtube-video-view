import { useContext } from "react";
import { ShortsContext } from "../context/shorts-context";

export const useShorts = () => {
  const ctx = useContext(ShortsContext);

  if (!ctx) {
    throw new Error("useShorts must be used within a ShortsProvider");
  }

  return ctx;
};
