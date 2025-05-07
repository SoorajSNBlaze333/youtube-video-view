// import { motion } from "motion/react";
import { CommentsProvider } from "../context/comment-context";
import VideoMetadata from "./video-metadata";

export default function ActiveVideo() {
  return (
    <section className="col-span-1 md:col-span-4 xxl:col-span-6">
      <div
        className="rounded-2xl bg-no-repeat bg-contain flex justify-center items-center aspect-video relative overflow-hidden"
        style={{ backgroundImage: `url("video-preview-1.jpg")` }}
      >
        {/* <motion.div
          className="w-14 h-14 rounded-full border-6 border-black border-t-white will-change-transform"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        /> */}
        {/* <div className="absolute border-t-2 h-28 bottom-0 w-full left-0 border-white"></div> */}
      </div>
      <CommentsProvider>
        <VideoMetadata />
      </CommentsProvider>
    </section>
  );
}
