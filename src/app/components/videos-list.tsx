import { useVideos } from "../hooks/use-videos";
import VideoPreview from "./video-preview";
import { motion } from "motion/react";

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

export default function VideosList() {
  const {
    relatedVideos: { videos, isLoading },
  } = useVideos();

  if (!isLoading && videos.length) {
    return (
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col justify-start items-between gap-1 w-full border-t-[1px] pt-2 border-gray-200 mb-[58px]"
      >
        {videos.map((video, index) => (
          <VideoPreview key={index} video={video} />
        ))}
      </motion.section>
    );
  }
}
