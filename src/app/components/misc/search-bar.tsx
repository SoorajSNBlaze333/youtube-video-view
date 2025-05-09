"use client";

import { MagnifyingGlassIcon, MicrophoneIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";

export default function SearchBar() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchBarRef = useRef<HTMLDivElement | null>(null);
  const [searchItems] = useState(new Array(10).fill("This is a search text"));

  const renderDropdown = () => {
    if (searchBarRef.current && isSearchFocused) {
      const element = searchBarRef.current.getBoundingClientRect();
      const top = element.top + element.height + 4;
      const left = element.left;

      return (
        <section
          className="absolute bg-white z-20 drop-shadow-md py-4 rounded-xl"
          style={{
            top: `${top}px`,
            left: `${left}px`,
            width: element.width,
          }}
        >
          {searchItems.map((item, index) => (
            <div
              key={index}
              className="p-2 px-4 flex justify-between items-center hover:bg-gray-100 cursor-default"
            >
              <div className="flex justify-start items-center gap-2">
                <ClockIcon className="size-5" />
                <p className="font-semibold tracking-tight">{item}</p>
              </div>
              <p className="text-blue-600 hover:underline text-xs cursor-pointer">
                Remove
              </p>
            </div>
          ))}
        </section>
      );
    }
    return <div className="absolute hidden" />;
  };

  return (
    <section className="col-span-5 hidden md:block">
      <section className="flex justify-center items-center gap-4">
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
          <button className="border-[1px] border-l-0 border-gray-300 px-4 py-2.5 pl-6 rounded-r-full bg-gray-100 cursor-pointer hover:bg-gray-200">
            <MagnifyingGlassIcon className="size-5" />
          </button>
          {renderDropdown()}
        </div>
        <button className="p-2.5 rounded-full bg-gray-100 cursor-pointer hover:bg-gray-200">
          <MicrophoneIcon className="size-5" />
        </button>
      </section>
    </section>
  );
}
