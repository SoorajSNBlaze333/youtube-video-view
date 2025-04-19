import { Bars3Icon } from "@heroicons/react/24/solid";
import YoutubeIcon from "../icons/youtube-icon";

export default function AppActions() {
  return (
    <section className="col-span-2 flex justify-start items-center">
      <div className="rounded-full hover:bg-gray-100 p-2 mr-3 cursor-pointer">
        <Bars3Icon className="size-6" />
      </div>
      <YoutubeIcon />
    </section>
  );
}
