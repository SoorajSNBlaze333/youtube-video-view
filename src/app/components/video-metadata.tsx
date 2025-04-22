import Image from "next/image";
import { useVideo } from "../hooks/use-video";
import {
  BellIcon,
  ChevronDownIcon,
  EllipsisHorizontalIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";

export default function VideoMetadata() {
  const {
    video: {
      title,
      channel: { name, subscribers },
    },
  } = useVideo();

  return (
    <section className="w-full mt-2">
      <p className="text-2xl font-bold tracking-tight">{title}</p>
      <div className="py-1 flex justify-between items-center mt-2">
        <section className="flex justify-start items-center gap-3">
          <Image
            className="rounded-full h-10 w-10 cursor-pointer"
            src="https://i.pravatar.cc/200"
            alt="channel"
            height={30}
            width={30}
          />
          <section className="flex flex-col tracking-tight mr-4">
            <p className="font-bold font-lg cursor-pointer">{name}</p>
            <p className="text-gray-500 text-xs font-semibold">{subscribers}</p>
          </section>
          <button className="rounded-full flex gap-2 bg-gray-100 hover:bg-gray-200 py-2 px-2.5 cursor-pointer">
            <BellIcon className="size-5" />
            <p className="text-sm font-bold">Subscribed</p>
            <ChevronDownIcon className="size-4.5" />
          </button>
        </section>
        <section className="flex justify-end items-center gap-3 ">
          <div className="cursor-pointer flex justify-between bg-gray-100 rounded-full overflow-hidden">
            <button className="flex gap-2 py-2 px-3 bg-gray-100 hover:bg-gray-200 rounded-l-full cursor-pointer">
              <HandThumbUpIcon className="size-5" />
              <p className="text-sm font-bold">17K</p>
            </button>
            <div className="border-l-[1px] border-gray-300 my-2" />
            <button className="py-2 px-3 bg-gray-100 hover:bg-gray-200 rounded-r-full cursor-pointer">
              <HandThumbDownIcon className="size-5" />
            </button>
          </div>
          <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full cursor-pointer flex gap-2 py-2 px-2.5">
            <p className="text-sm font-bold">Share</p>
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full cursor-pointer flex gap-2 py-2 px-2.5">
            <p className="text-sm font-bold">Thanks</p>
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full cursor-pointer">
            <EllipsisHorizontalIcon className="size-6" />
          </button>
        </section>
      </div>
      <div className="bg-gray-100 p-3 mt-2 w-full rounded-xl text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </section>
  );
}
