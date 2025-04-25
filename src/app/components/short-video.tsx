import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { type Short } from "../context/shorts-context";
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

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function ShortVideo({ short }: { short: Short }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="col-span-1 flex flex-col justify-center items-start gap-2 cursor-pointer"
    >
      <motion.div
        className="aspect-[9/16] w-full rounded-md bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${short.thumbnail})` }}
        variants={item}
      ></motion.div>
      <motion.div variants={item} className="flex items-center gap-2">
        <p className="font-bold overflow-hidden text-ellipsis line-clamp-2">
          {short.title}
        </p>
        <EllipsisVerticalIcon className="size-12 text-black" />
      </motion.div>
      <motion.p variants={item} className="text-gray-700 text-sm">
        {short.views} views
      </motion.p>
    </motion.div>
  );
}
