import { useContext } from "react";
import { ControlsContext } from "../context/controls-context";

export const useControls = () => {
  const ctx = useContext(ControlsContext);

  if (!ctx) {
    throw new Error("useControls must be used within a ControlsProvider");
  }

  return ctx;
};
