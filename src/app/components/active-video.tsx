// import { motion } from "motion/react";
import VideoMetadata from "./video-metadata";

export default function ActiveVideo() {
  return (
    <section className="col-span-1 md:col-span-4 xxl:col-span-6">
      <div className="bg-black rounded-2xl flex justify-center items-center aspect-video relative overflow-hidden">
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
      <VideoMetadata />
    </section>
  );
}
