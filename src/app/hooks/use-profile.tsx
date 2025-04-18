import { useContext } from "react";
import { UserContext } from "../context/profile-context";

export const useProfile = () => {
  const ctx = useContext(UserContext);

  if (!ctx) {
    throw new Error("useProfile must be used within a UserProvider");
  }

  return ctx;
};
