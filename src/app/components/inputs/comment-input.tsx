import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Profile from "../misc/profile";

export const CommentInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen((prev) => prev || isFocused);
  }, [isFocused]);

  const handleCancel = () => {
    setIsFocused(false);
    setIsOpen(false);
    setValue("");
  };

  return (
    <div className="flex justify-start items-start gap-4 py-2">
      <div className="mt-3">
        <Profile size="10" />
      </div>
      <div className="w-full flex flex-col">
        <div className="relative w-full flex justify-center items-center">
          <input
            className="w-full relative py-2 placeholder-gray-600 text-sm outline-0 border-b-[1px] border-gray-400 focus:outline-none"
            placeholder="Add a comment..."
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          {isFocused && (
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 0.25,
                scale: { type: "tween" },
                ease: "easeOut",
              }}
              className="w-10 absolute bottom-0 centered z-10 border-b-2 border-gray-800"
            />
          )}
        </div>
        {isOpen && (
          <div className="w-full flex gap-2 justify-end items-center py-1.5">
            <button
              onClick={handleCancel}
              className="bg-white hover:bg-gray-200 p-2 rounded-full cursor-pointer flex gap-2 py-2 px-3"
            >
              <p className="text-sm font-bold">Cancel</p>
            </button>
            <button
              disabled={Boolean(!value.length)}
              className="bg-blue-600 disabled:bg-gray-200 disabled:text-gray-400 text-white p-2 rounded-full cursor-pointer flex gap-2 py-2 px-3"
            >
              <p className="text-sm font-bold">Comment</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
