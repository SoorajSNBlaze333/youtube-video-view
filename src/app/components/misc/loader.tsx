import { motion } from "motion/react";

export const Loader = () => {
  return (
    <div className="w-full flex justify-center items-center py-4">
      <motion.div
        className="w-8 aspect-square rounded-full border-4 border-black border-t-white will-change-transform"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
