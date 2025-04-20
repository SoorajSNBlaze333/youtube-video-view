import { PlayIcon } from "@heroicons/react/24/solid";
import { Oswald } from "next/font/google";

const robotoCondensed = Oswald({
  subsets: ["latin"],
});

export default function YoutubeIcon() {
  return (
    <div className="text-white flex justify-center items-center gap-0.5 cursor-pointer">
      <div className="bg-red-500 px-2.5 py-1.5 rounded-md">
        <PlayIcon className="size-3" />
      </div>
      <p
        className={`${robotoCondensed.className} text-black text-xl tracking-tighter font-semibold capitalize`}
      >
        YouTube (Clone)
      </p>
    </div>
  );
}
