import { motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.15,
      type: "spring",
      staggerChildren: 0.05,
      bounce: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.6 },
  show: { opacity: 1, scale: 1 },
};

export default function PreviewGrid() {
  const preview = new Array(10).fill(1);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className={`absolute top-0 left-0 z-10 h-full w-full bg-black text-white grid grid-cols-4 grid-rows-3 gap-1 px-2 py-20`}
    >
      {preview.map((_video, index) => (
        <motion.div
          variants={item}
          key={index}
          className="cursor-pointer relative col-span-1 row-span-1 rounded-lg bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(video-preview-${index + 1}.jpg)` }}
        >
          <section className="h-full w-full relative opacity-0 hover:opacity-100 transition-opacity duration-150 flex flex-col justify-between items-end p-1 bg-gradient-to-b from-black/50 to-transparent">
            <div className="p-1 text-white w-full">
              <p className="font-semibold text-xs">
                We try Life Hacks that actually work
              </p>
              <p className="text-xs">Channel • 1.2M views</p>
            </div>
            <p
              style={{ fontSize: "11px" }}
              className="rounded-sm w-fit bg-gray-800/85 text-white font-semibold px-1"
            >
              01:00
            </p>
          </section>
        </motion.div>
      ))}
    </motion.div>
  );
}
