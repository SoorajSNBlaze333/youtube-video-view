import { Bars3Icon } from "@heroicons/react/24/solid";
import YoutubeIcon from "../icons/youtube-icon";
import { useTheme } from "@/app/hooks/use-theme";
import { Moon, Sun } from "@phosphor-icons/react";

export default function AppActions() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <section className="col-span-4 md:col-span-2">
      <section className="flex justify-start items-center gap-3">
        <div className="rounded-full hover:bg-gray-100 p-2 cursor-pointer">
          <Bars3Icon className="size-6 text-black dark:text-white" />
        </div>
        <YoutubeIcon />
        <button className="text-black dark:text-white" onClick={toggleDarkMode}>
          {darkMode ? (
            <Sun className="size-5 text-black dark:text-white" />
          ) : (
            <Moon className="size-5 text-black dark:text-white" />
          )}
        </button>
      </section>
    </section>
  );
}
