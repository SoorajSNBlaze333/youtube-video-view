import { MicrophoneIcon, PlusIcon } from "@heroicons/react/24/solid";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Profile from "./profile";
import { GithubLogo } from "@phosphor-icons/react";

export default function UserActions() {
  return (
    <section className="col-span-5 md:col-span-2">
      <div className="flex justify-end items-center gap-1 md:gap-4">
        <button className="block md:hidden rounded-full p-2 hover:bg-slate-100 relative cursor-pointer">
          <MagnifyingGlassIcon className="size-5" />
        </button>
        <button className="block md:hidden rounded-full p-2 hover:bg-slate-100 relative cursor-pointer">
          <MicrophoneIcon className="size-5" />
        </button>
        <button className="rounded-full p-2 px-4 flex gap-1 justify-center items-center bg-gray-100 dark:bg-gray-800 cursor-pointer hover:bg-gray-200 hover:dark:bg-gray-700">
          <PlusIcon className="size-6" />
          <p className="text-black dark:text-white font-bold text-sm">Create</p>
        </button>
        <button className="rounded-full p-2 hover:bg-slate-100 hover:dark:bg-gray-700 relative cursor-pointer">
          <p className="bg-red-500 absolute z-20 -right-1.5 top-0.5 text-xs px-1 rounded-full text-white border-2 border-white dark:border-black">
            5+
          </p>
          <BellIcon className="size-6" />
        </button>
        <Profile />
        <a
          target="_blank"
          href="https://github.com/SoorajSNBlaze333/youtube-video-view"
          className="rounded-full p-2 hover:bg-slate-100"
        >
          <GithubLogo className="size-6" weight="fill" />
        </a>
      </div>
    </section>
  );
}
