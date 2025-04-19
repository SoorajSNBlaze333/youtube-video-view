import { Bars3Icon } from "@heroicons/react/24/solid";
import YoutubeIcon from "../icons/youtube-icon";
import SearchBar from "../misc/search-bar";

export default function Navbar() {
  return (
    <nav className="w-full px-5 py-3 grid grid-cols-8 gap-2 bg-white">
      <section className="col-span-2 flex justify-start items-center">
        <Bars3Icon className="size-7 mr-8" />
        <YoutubeIcon />
      </section>
      <SearchBar />
      <div className="col-span-2 flex justify-end items-center">
        Profile Actions
      </div>
    </nav>
  );
}
