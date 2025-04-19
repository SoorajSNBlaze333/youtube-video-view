import { Bars3Icon, PlusIcon } from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/24/outline";
import YoutubeIcon from "../icons/youtube-icon";
import SearchBar from "../misc/search-bar";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-3 grid grid-cols-8 gap-2 bg-white">
      <section className="col-span-2 flex justify-start items-center">
        <Bars3Icon className="size-7 mr-8" />
        <YoutubeIcon />
      </section>
      <SearchBar />
      <div className="col-span-2 flex justify-end items-center gap-4">
        <button className="transition-all rounded-full bg-gray-100 p-2 px-4 flex justify-center items-center gap-2 cursor-pointer hover:bg-gray-200">
          <PlusIcon className="size-6" />
          <p className="text-black font-bold">Create</p>
        </button>
        <button className="rounded-full p-2 hover:bg-slate-100 relative cursor-pointer">
          <p className="bg-red-500 absolute z-20 -right-1.5 top-0.5 text-xs px-1 rounded-full text-white border-2 border-white">
            5+
          </p>
          <BellIcon className="size-6" />
        </button>
        <Image
          className="rounded-full h-10 w-10"
          src="https://i.pravatar.cc/200"
          alt="youtubeUser"
          height={50}
          width={50}
        />
      </div>
    </nav>
  );
}
