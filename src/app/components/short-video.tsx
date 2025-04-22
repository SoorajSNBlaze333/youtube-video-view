import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { type Short } from "../context/video-context";

export default function ShortVideo({ short }: { short: Short }) {
  return (
    <div className="col-span-1 flex flex-col justify-center items-start gap-2 cursor-pointer">
      <div className="bg-slate-300 aspect-[9/16] w-full rounded-md"></div>
      <div className="flex items-center gap-2">
        <p className="font-bold overflow-hidden text-ellipsis line-clamp-2">
          {short.title}
        </p>
        <EllipsisVerticalIcon className="size-12 text-black" />
      </div>
      <p className="text-gray-700 text-sm">{short.views} views</p>
    </div>
  );
}
