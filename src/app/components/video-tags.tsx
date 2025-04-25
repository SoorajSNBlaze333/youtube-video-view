import { useScroll, motion, useMotionValueEvent } from "motion/react";
import { useVideo } from "../hooks/use-video";
import { useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

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

export default function VideoTags() {
  const { video, selectedTag, handleTagSelection } = useVideo();
  const { tags } = video;
  const ref = useRef<HTMLElement | null>(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const [scrollOptions, setScrollOptions] = useState({
    left: false,
    right: false,
  });

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    setScrollOptions({
      left: value > 0 ? true : false,
      right: value < 1 ? true : false,
    });
  });

  const handleScroll = (dir: number) => {
    if (ref.current) {
      ref.current.scrollLeft += dir * 300;
    }
  };

  return (
    <div className="overflow-hidden relative">
      <motion.section
        ref={ref}
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-nowrap justify-start items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth"
      >
        {tags.map((tag, index) => (
          <motion.div
            variants={item}
            key={index}
            onClick={() => handleTagSelection(tag.id)}
            className={`rounded-lg py-1.5 px-3 text-sm w-fit whitespace-nowrap font-semibold text-center cursor-pointer ${
              tag.id === selectedTag
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-900 hover:bg-gray-200"
            }`}
          >
            {tag.displayName}
          </motion.div>
        ))}
      </motion.section>
      {scrollOptions.left && (
        <div className="h-100 absolute left-0 top-0 z-10">
          <div className="w-10 absolute h-100 bg-white">
            <button
              className="z-20 absolute left-0 hover:bg-gray-200 p-2 rounded-full cursor-pointer"
              onClick={() => handleScroll(-1)}
            >
              <ChevronLeftIcon className="size-4" />
            </button>
          </div>
          <div className="absolute left-10 w-4 h-100 custom-shadow-left"></div>
        </div>
      )}
      {scrollOptions.right && (
        <div className="h-100 absolute right-0 top-0 z-10">
          <div className="w-10 right-0 absolute h-100 bg-white">
            <button
              className="z-20 absolute right-0 hover:bg-gray-200 p-2 rounded-full cursor-pointer"
              onClick={() => handleScroll(1)}
            >
              <ChevronRightIcon className="size-4" />
            </button>
          </div>
          <div className="absolute right-10 w-4 h-100 custom-shadow-right"></div>
        </div>
      )}
    </div>
  );
}
