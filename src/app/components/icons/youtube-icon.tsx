import { PlayIcon } from "@heroicons/react/24/solid";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
});

export default function YoutubeIcon() {
  return (
    <div className="text-white flex justify-center items-center gap-1 cursor-pointer">
      <div className="bg-red-500 px-3.5 py-2 rounded-lg">
        <PlayIcon className="size-3" />
      </div>
      <p
        className={`${robotoCondensed.className} text-black text-xl tracking-tight font-bold capitalize`}
      >
        YouTube(Clone)
      </p>
    </div>
  );
}
