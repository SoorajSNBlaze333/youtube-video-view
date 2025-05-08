import { useEffect, useRef, useState } from "react";

const timeFormat = (duration: number): string => {
  const hrs = ~~(duration / 3600);
  const mins = ~~((duration % 3600) / 60);
  const secs = ~~duration % 60;
  let ret = "";
  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }
  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
};

export type ControlsState = {
  isPlaying: boolean;
  isAutoplayEnabled: boolean;
  percentage: number;
  seek: number;
  totalSeek: number;
  percentages: number[];
  showControls: boolean;
  animatePlay: string | null;
  volume: number;
};

export const useControls = () => {
  const [videoState, setVideoState] = useState<ControlsState>({
    isPlaying: false,
    isAutoplayEnabled: true,
    percentage: 0,
    seek: 0,
    totalSeek: 900,
    percentages: [100],
    showControls: true,
    animatePlay: null,
    volume: 100,
  });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setVideoState((prev) => ({
      ...prev,
      seek: prev.totalSeek * (videoState.percentage / 100),
    }));
  }, [videoState.percentage]);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVideoState((prev) => ({
      ...prev,
      animatePlay: videoState.isPlaying ? "play" : "pause",
    }));
    timeoutRef.current = setTimeout(() => {
      setVideoState((prev) => ({
        ...prev,
        animatePlay: null,
      }));
    }, 1000);
  }, [videoState.isPlaying]);

  const setPercentage = (percentage: number) => {
    setVideoState((prev) => ({
      ...prev,
      percentage,
    }));
  };

  const setTotalSeek = (totalSeek: number) => {
    setVideoState((prev) => ({
      ...prev,
      totalSeek,
    }));
  };

  const playVideo = () => {
    setVideoState((prev) => ({
      ...prev,
      isPlaying: true,
    }));
  };

  const pauseVideo = () => {
    setVideoState((prev) => ({
      ...prev,
      isPlaying: false,
    }));
  };

  const toggleAutoplay = () => {
    setVideoState((prev) => ({
      ...prev,
      isAutoplayEnabled: !prev.isAutoplayEnabled,
    }));
  };

  const displayControls = () => {
    setVideoState((prev) => ({
      ...prev,
      showControls: true,
    }));
  };

  const hideControls = () => {
    setVideoState((prev) => ({
      ...prev,
      showControls: false,
    }));
  };

  const setVolume = (volume: number) => {
    setVideoState((prev) => ({
      ...prev,
      volume,
    }));
  };

  return {
    ...videoState,
    formattedSeek: timeFormat(videoState.seek),
    formattedTotal: timeFormat(videoState.totalSeek),
    playVideo,
    pauseVideo,
    setPercentage,
    setTotalSeek,
    toggleAutoplay,
    displayControls,
    hideControls,
    setVolume,
  };
};
