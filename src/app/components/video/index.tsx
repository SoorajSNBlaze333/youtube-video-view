"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "@phosphor-icons/react";
import { useControls } from "@/app/hooks/use-controls";
import { OnProgressProps } from "react-player/base";
import ReactPlayer from "react-player";
import PreviewGrid from "./preview-grid";
import PlayerLoader from "./player-loader";
import ControlButtons from "./control-buttons";
import SliderControls from "./slider-controls";
import { motion } from "motion/react";

export default function ActiveVideo() {
  const {
    percentage,
    loaded,
    isPlaying,
    playVideo,
    pauseVideo,
    showControls,
    displayControls,
    hideControls,
    setPercentage,
    setTotalSeek,
    animatePlay,
    volume,
    setLoaded,
    isFullscreen,
    playbackSpeed,
    toggleFullscreen,
  } = useControls();
  const reactPlayerRef = useRef<ReactPlayer | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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

  const renderPlayer = () => {
    return (
      <ReactPlayer
        ref={reactPlayerRef}
        fallback={
          <div className="absolute top-0 left-0 h-full w-full bg-black flex justify-center items-center"></div>
        }
        playing={isPlaying}
        volume={volume / 100}
        controls={false}
        progressInterval={500}
        url="/api/mock/stream"
        height={"100%"}
        width={"100%"}
        playbackRate={playbackSpeed}
        style={{ aspectRatio: "16/9", position: "absolute", top: 0, left: 0 }}
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
    );
  };

  const renderVideoPlayer = () => {
    if (percentage < 100) {
      if (isClient) {
        return renderPlayer();
      }
      return <PlayerLoader />;
    }
    return <PreviewGrid />;
  };

  const renderVideoControls = () => {
    if (loaded > 0) {
      return (
        <section
          className={`absolute ${
            isFullscreen ? "" : "bottom-0"
          } left-0 z-20 h-max w-full flex flex-col justify-end items-center transition-opacity duration-150 ${
            showControls ? "opacity-100" : "opacity-0"
          }`}
        >
          <SliderControls handleSeek={handleSeek} />
          <ControlButtons />
        </section>
      );
    }
  };

  const renderVideoClickHandles = () => {
    if (percentage < 100) {
      return (
        <section className="absolute h-full w-full flex justify-center items-center z-10 top-0 left-0">
          <div
            className="h-52 w-52 flex justify-center items-center"
            onClick={handleVideoClick}
            onDoubleClick={toggleFullscreen}
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
        </section>
      );
    }
  };

  const renderVideo = () => {
    return (
      <>
        {renderVideoPlayer()}
        {renderVideoControls()}
        {renderVideoClickHandles()}
      </>
    );
  };

  return (
    <section
      className={`${
        isFullscreen
          ? "w-screen h-screen fixed top-0 left-0 z-50"
          : "relative w-full h-max aspect-video rounded-2xl overflow-hidden"
      }`}
      onMouseOver={handleDisplayControls}
      onMouseLeave={handleHideControls}
    >
      <div
        className={`${
          isFullscreen
            ? "fixed bg-black h-screen w-screen flex flex-col justify-end items-center py-4"
            : ""
        }`}
      >
        {renderVideo()}
      </div>
    </section>
  );
}
