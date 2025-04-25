import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { type Short } from "../context/shorts-context";

export default function ShortVideo({ short }: { short: Short }) {
  return (
    <div className="col-span-1 flex flex-col justify-center items-start gap-2 cursor-pointer">
      <div
        className="aspect-[9/16] w-full rounded-md bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${short.thumbnail})` }}
      ></div>
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
