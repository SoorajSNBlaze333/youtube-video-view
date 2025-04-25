import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { RelatedVideo } from "../context/related-videos-context";
import { motion } from "motion/react";

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

export default function VideoPreview({ video }: { video: RelatedVideo }) {
  return (
    <motion.div variants={item} className="grid grid-cols-11 gap-2 mb-2">
      <div
        className="col-span-5 rounded-lg bg-no-repeat bg-cover aspect-video relative cursor-pointer"
        style={{ backgroundImage: `url(${video.thumbnail})` }}
      >
        <p
          style={{ fontSize: "11px" }}
          className="absolute right-1.5 bottom-1.5 rounded-sm bg-gray-800/85 text-white font-semibold px-1"
        >
          {video.duration}
        </p>
      </div>
      <div className="col-span-6 flex flex-col justify-start gap-0.5">
        <p className="w-full text-sm font-bold overflow-hidden text-ellipsis line-clamp-2">
          {video.title}
        </p>
        <span className="flex justify-start items-center gap-1">
          <p className="text-sm font-semibold text-gray-500">
            {video.channel.name}
          </p>
          {video.channel.isVerified && (
            <CheckCircleIcon className="size-4 text-gray-500" />
          )}
        </span>
        <p className="flex text-xs justify-start items-center gap-2">
          {video.views} • {video.posted} ago
        </p>
        {video.isNew && (
          <p className="mt-1 text-xs w-max font-semibold bg-gray-300 text-gray-600 rounded-sm px-1 py-0.5">
            New
          </p>
        )}
      </div>
    </motion.div>
  );
}
