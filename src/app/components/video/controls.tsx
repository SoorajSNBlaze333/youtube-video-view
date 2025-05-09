"use client";

import { useRef, useState } from "react";
import {
  Airplay,
  CornersOut,
  GearSix,
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
import { AnimatePresence, motion } from "motion/react";
import { OnProgressProps } from "react-player/base";
import dynamic from "next/dynamic";
import type ReactPlayerClass from "react-player";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function Controls() {
  const {
    percentage,
    loaded,
    isPlaying,
    playVideo,
    pauseVideo,
    formattedSeek,
    formattedTotal,
    isAutoplayEnabled,
    toggleAutoplay,
    showControls,
    displayControls,
    hideControls,
    setPercentage,
    setTotalSeek,
    animatePlay,
    volume,
    setVolume,
    setLoaded,
  } = useControls();
  const reactPlayerRef = useRef<ReactPlayerClass | null>(null);
  const [volumeShow, setVolumeShow] = useState(false);

  const handleDisplayControls = () => {
    if (isPlaying) {
      displayControls();
    }
  };

  const handleHideControls = () => {
    if (isPlaying) {
      hideControls();
    }
  };

  const handleVideoClick = () => {
    if (isPlaying) {
      pauseVideo();
    } else {
      playVideo();
    }
  };

  const handleSeek = (value: string) => {
    setPercentage(Number(value));
    if (reactPlayerRef.current) {
      reactPlayerRef.current.seekTo(Number(value) / 100, "fraction");
    }
  };

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
            className="cursor-pointer"
            weight="fill"
            size={24}
            onClick={handleClick}
          />
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <section
      className="relative w-full h-max rounded-2xl overflow-hidden aspect-video"
      onMouseOver={handleDisplayControls}
      onMouseLeave={handleHideControls}
    >
      {percentage < 100 ? (
        <ReactPlayer
          ref={reactPlayerRef}
          fallback={
            <div className="h-full w-full bg-black flex justify-center items-center"></div>
          }
          playing={isPlaying}
          volume={volume / 100}
          controls={false}
          progressInterval={500}
          url="video.mp4"
          height="100%"
          width="100%"
          style={{ aspectRatio: "16/9" }}
          onProgress={(state: OnProgressProps) => {
            setPercentage(Math.min(100, state.played * 100));
            setLoaded(Math.min(100, state.loaded * 100));
          }}
          onReady={(player) => {
            setTotalSeek(player.getDuration());
          }}
          onEnded={() => {
            pauseVideo();
          }}
        />
      ) : (
        <div className="absolute top-0 left-0 h-full w-full bg-black flex justify-center items-center">
          <ArrowPathIcon
            className="size-8 cursor-pointer text-white z-30"
            onClick={handleRestart}
          />
        </div>
      )}
      {loaded > 0 && (
        <section
          className={`absolute bottom-0 left-0 z-20 h-full w-full flex flex-col justify-end items-center transition-opacity duration-150 ${
            showControls ? "opacity-100" : "opacity-0"
          }`}
        >
          {percentage < 100 && (
            <div
              className="h-full w-full flex justify-center items-center"
              onClick={handleVideoClick}
            >
              {(animatePlay === "play" || animatePlay === "pause") && (
                <motion.div
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 0, scale: 2 }}
                  transition={{
                    duration: 0.6,
                    scale: { type: "spring", visualDuration: 0.6, bounce: 0 },
                  }}
                  className="text-white bg-gray-500/50 p-4 rounded-full"
                >
                  {animatePlay === "play" ? (
                    <Play className="cursor-pointer" weight="fill" size={24} />
                  ) : (
                    <Pause className="cursor-pointer" weight="fill" size={24} />
                  )}
                </motion.div>
              )}
            </div>
          )}
          <section className="w-full px-4 min-h-4 flex justify-center items-center relative">
            <input
              type="range"
              className="appearance-none w-full h-1 bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:bg-red-600 [&::-webkit-slider-thumb]:rounded-full"
              value={percentage}
              onMouseDown={() => (isPlaying ? pauseVideo() : null)}
              onChange={(event) => handleSeek(event.target.value)}
              onMouseUp={() => (isPlaying ? playVideo() : null)}
              step="any"
              min={0}
              max={100}
            />
            <div className="absolute w-full flex justify-start items-center px-4 -z-10">
              <div
                className="h-1 bg-red-600"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <div className="absolute w-full px-4 -z-20">
              <div
                className="h-1 bg-gray-300/60"
                style={{
                  left: `${percentage}%`,
                  width: `${Math.min(
                    100,
                    percentage + (loaded - percentage)
                  )}%`,
                }}
              />
            </div>
            <div className="absolute w-full flex justify-end items-center px-4 -z-30">
              <div
                className="h-1 bg-gray-400/60"
                style={{ width: `${100 - percentage}%` }}
              />
            </div>
          </section>
          <section className="h-12 relative w-full grid grid-cols-2 px-4 pb-2">
            <section className="col-span-1 flex gap-6 justify-start items-center px-3 text-white">
              {!isPlaying ? (
                <Play
                  onClick={playVideo}
                  className="cursor-pointer"
                  weight="fill"
                  size={24}
                />
              ) : (
                <Pause
                  onClick={pauseVideo}
                  className="cursor-pointer"
                  weight="fill"
                  size={24}
                />
              )}
              <SkipForward className="cursor-pointer" weight="fill" size={24} />
              <div
                className="flex justify-between items-center gap-6"
                onMouseOver={handleVolumeShow}
                onMouseLeave={handleVolumeHide}
              >
                {renderVolume()}
                {volumeShow && (
                  <motion.div
                    initial={{ width: 0, left: 0 }}
                    animate={{ width: "64px", left: 0 }}
                    transition={{ duration: 0.12 }}
                    className="w-16 relative h-6 flex justify-center items-center"
                  >
                    <input
                      type="range"
                      min={0}
                      max={100}
                      step={1}
                      value={volume}
                      onChange={(event) =>
                        setVolume(Number(event.target.value))
                      }
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
                  </motion.div>
                )}
              </div>
              <p className="text-xs font-semibold select-none">
                {formattedSeek} / {formattedTotal}
              </p>
            </section>
            <section className="col-span-1 flex gap-6 justify-end items-center px-3 text-white">
              <Switch
                checked={isAutoplayEnabled}
                onChange={toggleAutoplay}
                className="group relative flex h-3 w-8 cursor-pointer rounded-full bg-gray-400 p-1 ease-in-out focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white"
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none size-4.5 -translate-x-2 -translate-y-1.75 rounded-full ${
                    isAutoplayEnabled ? "bg-white" : "bg-gray-500"
                  } shadow-lg ring-0 transition duration-100 flex justify-center items-center ease-in-out group-data-checked:translate-x-3.5`}
                >
                  {isAutoplayEnabled ? (
                    <Play className="text-black" weight="fill" size={10} />
                  ) : (
                    <Pause className="text-white" weight="fill" size={10} />
                  )}
                </span>
              </Switch>
              <Subtitles className="cursor-pointer" weight="fill" size={24} />
              <GearSix className="cursor-pointer" weight="fill" size={24} />
              <PictureInPicture
                className="cursor-pointer"
                weight="bold"
                size={24}
              />
              <Rectangle className="cursor-pointer" weight="bold" size={24} />
              <Airplay className="cursor-pointer" weight="bold" size={24} />
              <CornersOut className="cursor-pointer" weight="bold" size={24} />
            </section>
          </section>
        </section>
      )}
    </section>
  );
}
