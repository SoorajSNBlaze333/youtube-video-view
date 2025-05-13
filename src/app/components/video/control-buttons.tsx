import {
  Airplay,
  CornersOut,
  Pause,
  PictureInPicture,
  Play,
  Rectangle,
  SkipForward,
  SpeakerHigh,
  SpeakerLow,
  SpeakerSlash,
  Subtitles,
} from "@phosphor-icons/react";
import { Switch } from "@headlessui/react";
import { useControls } from "@/app/hooks/use-controls";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SettingsDropdown from "./settings";

export default function ControlButtons() {
  const [volumeShow, setVolumeShow] = useState(false);
  const {
    isPlaying,
    percentage,
    volume,
    formattedSeek,
    formattedTotal,
    isAutoplayEnabled,
    playVideo,
    setPercentage,
    setVolume,
    pauseVideo,
    toggleAutoplay,
    toggleFullscreen,
  } = useControls();

  const handleRestart = () => {
    setPercentage(0);
    playVideo();
  };

  const handleVolumeShow = () => {
    if (!volumeShow) {
      setVolumeShow(true);
    }
  };

  const handleVolumeHide = () => {
    if (volumeShow) {
      setVolumeShow(false);
    }
  };

  const renderVolume = () => {
    let Icon;
    if (volume <= 0) {
      Icon = SpeakerSlash;
    } else if (volume > 50) {
      Icon = SpeakerHigh;
    } else {
      Icon = SpeakerLow;
    }

    const handleClick = () => {
      setVolume(volume > 0 ? 0 : 100);
    };

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={Icon.displayName}
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.7 }}
          transition={{ duration: 0.2 }}
        >
          <Icon
            className="cursor-pointer size-4 md:size-6"
            weight="fill"
            onClick={handleClick}
          />
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <section className="h-12 relative w-full grid grid-cols-9 md:grid-cols-2 px-4 pb-2  bg-gradient-to-t from-black/50 to-transparent">
      <section className="col-span-5 md:col-span-1 flex gap-3 md:gap-6 justify-start items-center px-3 text-white">
        {!isPlaying ? (
          percentage < 100 ? (
            <Play
              onClick={playVideo}
              className="cursor-pointer size-4 md:size-6"
              weight="fill"
            />
          ) : (
            <ArrowPathIcon
              className="size-4 cursor-pointer md:size-6"
              onClick={handleRestart}
            />
          )
        ) : (
          <Pause
            onClick={pauseVideo}
            className="cursor-pointer size-4 md:size-6"
            weight="fill"
          />
        )}
        <SkipForward
          className="cursor-pointer size-4 md:size-6"
          weight="fill"
        />
        <div
          className="flex justify-between items-center gap-6"
          onMouseOver={handleVolumeShow}
          onMouseLeave={handleVolumeHide}
        >
          {renderVolume()}
          {volumeShow && (
            <div className="w-10 md:w-16 relative h-6 flex justify-center items-center">
              <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={volume}
                onChange={(event) => setVolume(Number(event.target.value))}
                className="appearance-none bg-transparent range-sm rounded-full w-full h-1 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full transition-all duration-150 cursor-pointer"
              />
              <div className="absolute w-full flex justify-start items-center -z-10">
                <div
                  className="h-1 bg-white rounded-l-full"
                  style={{ width: `${volume}%` }}
                />
              </div>
              <div className="absolute w-full flex justify-end items-center -z-10">
                <div
                  className="h-1 bg-gray-600/40 rounded-r-full"
                  style={{
                    width: `${100 - volume}%`,
                  }}
                />
              </div>
            </div>
          )}
        </div>
        <p className="text-xs font-semibold select-none">
          {formattedSeek} / {formattedTotal}
        </p>
      </section>
      <section className="col-span-4 md:col-span-1 flex gap-3 md:gap-6 justify-end items-center px-3 text-white">
        <div className="scale-75 md:scale-100">
          <Switch
            checked={isAutoplayEnabled}
            onChange={toggleAutoplay}
            className="group relative flex h-3 w-8 cursor-pointer rounded-full bg-gray-400 p-1 ease-in-out focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white"
          >
            <span
              aria-hidden="true"
              className={`pointer-events-none w-5 h-5 -translate-x-2 -translate-y-2 rounded-full ${
                isAutoplayEnabled ? "bg-white" : "bg-gray-500"
              } shadow-lg ring-0 transition duration-150 flex justify-center items-center ease-in-out ${
                isAutoplayEnabled ? "translate-x-3" : ""
              }`}
            >
              {isAutoplayEnabled ? (
                <Play className="text-black" weight="fill" size={10} />
              ) : (
                <Pause className="text-white" weight="fill" size={10} />
              )}
            </span>
          </Switch>
        </div>
        <Subtitles className="cursor-pointer size-4 md:size-6" weight="fill" />
        <SettingsDropdown />
        <PictureInPicture
          className="cursor-pointer size-4 md:size-6"
          weight="bold"
        />
        <Rectangle className="cursor-pointer size-4 md:size-6" weight="bold" />
        <Airplay
          className="hidden md:block cursor-pointer size-6"
          weight="bold"
        />
        <CornersOut
          className="cursor-pointer size-4 md:size-6"
          weight="bold"
          onClick={toggleFullscreen}
        />
      </section>
    </section>
  );
}
