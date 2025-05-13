import { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ArrowLeft, GearSix, PlayCircle } from "@phosphor-icons/react";
import { useControls } from "@/app/hooks/use-controls";

export default function SettingsDropdown() {
  const { playbackSpeed, isFullscreen, setPlaybackSpeed, showControls } =
    useControls();
  const [open, setOpen] = useState(false);
  const [level, setLevel] = useState<1 | 2>(1);
  const rates = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

  useEffect(() => {
    if (!showControls && open) {
      setOpen(false);
      setLevel(1);
    }
  }, [open, showControls]);

  const nextLevel = () => {
    setLevel(2);
  };

  const prevLevel = () => {
    setLevel(1);
  };

  const handleRate = (rate: number) => {
    setPlaybackSpeed(rate);
    prevLevel();
  };

  const renderLevel = () => {
    if (level === 1) {
      return (
        <MenuItem
          as="button"
          onClick={nextLevel}
          className="px-2 py-2 w-full flex justify-start items-center cursor-pointer gap-1"
        >
          <PlayCircle className="size-4 md:size-5" weight="bold" />
          <div className="w-full flex justify-between items-center">
            <p>Playback Speed</p>
            <p>{playbackSpeed}</p>
          </div>
        </MenuItem>
      );
    }
    return (
      <>
        <MenuItem
          as="button"
          onClick={prevLevel}
          className="px-2 py-2 w-full flex justify-start items-center cursor-pointer gap-1 hover:bg-gray-400/55"
        >
          <ArrowLeft className="size-4 md:size-5" weight="regular" />
          <p>Playback Speed</p>
        </MenuItem>
        {rates.map((rate, index) => (
          <MenuItem
            key={index}
            as="button"
            onClick={() => handleRate(rate)}
            className="w-full flex justify-start items-center cursor-pointer gap-1 hover:bg-gray-400/55"
          >
            <p className="px-6 py-2 text-left">
              {rate === 1 ? "Normal" : rate}
            </p>
          </MenuItem>
        ))}
      </>
    );
  };

  return (
    <Menu>
      <MenuButton
        as={GearSix}
        className="cursor-pointer size-4 md:size-6 inline-flex items-center data-focus:outline-none"
        onClick={() => setOpen((prev) => !prev)}
        weight="fill"
      />

      <MenuItems
        transition
        anchor="top start"
        static
        className={`w-56 absolute z-50 [--anchor-gap:30px] origin-top-right rounded-lg bg-black/80 ${
          isFullscreen ? "text-sm" : "text-xs"
        } text-white focus:outline-none data-closed:scale-95 data-closed:opacity-0`}
      >
        <div className="h-auto transition-all duration-100">
          {open && renderLevel()}
        </div>
      </MenuItems>
    </Menu>
  );
}
