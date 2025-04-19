import { MagnifyingGlassIcon, MicrophoneIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";

export default function SearchBar() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchBarRef = useRef(null);

  return (
    <section className="col-span-5 flex justify-center items-center gap-4">
      <div
        ref={searchBarRef}
        className="flex justify-between items-center w-full"
      >
        <label
          className={`border-blue-400 border-[1px] rounded-l-full border-r-0 p-2.5 ${
            isSearchFocused ? "opacity-100" : "opacity-0"
          }`}
        >
          <MagnifyingGlassIcon className="size-5" />
        </label>
        <input
          className="z-10 w-full outline-none border-[1px] px-4 placeholder-gray-600 border-gray-300 rounded-l-full p-2 focus:border-blue-400 focus:rounded-l-none focus:border-l-0"
          placeholder="Search"
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        />
        <button className="border-[1px] border-l-0 border-gray-300 px-4 py-2.5 pl-6 transition-all rounded-r-full bg-gray-100 cursor-pointer hover:bg-gray-200">
          <MagnifyingGlassIcon className="size-5" />
        </button>
      </div>
      <button className="p-2.5 rounded-full transition-all bg-gray-100 cursor-pointer hover:bg-gray-200">
        <MicrophoneIcon className="size-5" />
      </button>
    </section>
  );
}
