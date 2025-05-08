import { ReactNode, useRef } from "react";
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
  Subtitles,
} from "@phosphor-icons/react";
import { Switch } from "@headlessui/react";
import { useControls } from "@/app/hooks/use-controls";
import { motion, PanInfo } from "motion/react";

export default function Controls({ children }: { children: ReactNode }) {
  const {
    percentage,
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
    animatePlay,
  } = useControls();
  const constraintsRef = useRef<HTMLDivElement | null>(null);

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

  const handleSeek = (info: PanInfo) => {
    if (!constraintsRef.current) return;

    const container = constraintsRef.current;
    const containerRect = container.getBoundingClientRect();
    const relativeX = info.point.x - containerRect.left;
    const clampedX = Math.max(0, Math.min(relativeX, containerRect.width));
    const percentage = (clampedX / containerRect.width) * 100;

    setPercentage(percentage);
  };

  const handleVideoClick = () => {
    if (isPlaying) {
      pauseVideo();
    } else {
      playVideo();
    }
  };

  return (
    <section
      className="relative w-full h-max rounded-2xl overflow-hidden aspect-video"
      onMouseOver={handleDisplayControls}
      onMouseLeave={handleHideControls}
    >
      {children}
      <section
        className={`absolute bottom-0 left-0 z-20 h-full w-full flex flex-col justify-end items-center transition-opacity duration-150 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
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
        <section className="w-full px-4 min-h-4 flex justify-center items-center relative">
          <motion.div className="h-1 relative w-full" ref={constraintsRef}>
            <motion.div
              drag="x"
              dragConstraints={constraintsRef}
              dragElastic={false}
              dragMomentum={false}
              onDrag={(_event, info) => handleSeek(info)}
              className="h-4 w-4 bg-red-600 rounded-full absolute z-30 -translate-y-1.5"
            />
            <div
              className="h-1 absolute w-full bg-red-600 left-0 top-0"
              style={{ width: `${percentage}%` }}
            />
            <div
              className="h-1 absolute w-full bg-gray-400/60 right-0 top-0"
              style={{ width: `${100 - percentage}%` }}
            />
            {/* <div
              className="h-1 absolute w-full bg-gray-300/60 z-10 top-0"
              style={{
                left: `${percentage}%`,
                width: "30px",
              }}
            /> */}
          </motion.div>
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
            <SpeakerHigh className="cursor-pointer" weight="fill" size={24} />
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
    </section>
  );
}
