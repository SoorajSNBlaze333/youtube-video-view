import { PlusIcon } from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/24/outline";
import Profile from "./profile";

export default function UserActions() {
  return (
    <div className="col-span-2 flex justify-end items-center gap-4">
      <button className="rounded-full bg-gray-100 p-2 pr-4 flex gap-1 justify-center items-center cursor-pointer hover:bg-gray-200">
        <PlusIcon className="size-6" />
        <p className="text-black font-bold text-sm">Create</p>
      </button>
      <button className="rounded-full p-2 hover:bg-slate-100 relative cursor-pointer">
        <p className="bg-red-500 absolute z-20 -right-1.5 top-0.5 text-xs px-1 rounded-full text-white border-2 border-white">
          5+
        </p>
        <BellIcon className="size-6" />
      </button>
      <Profile />
    </div>
  );
}
