import { createContext, ReactNode, useEffect, useRef, useState } from "react";

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
  loaded: number;
  totalSeek: number;
  percentages: number[];
  showControls: boolean;
  animatePlay: string | null;
  volume: number;
  formattedSeek: string;
  formattedTotal: string;
  isFullscreen: boolean;
  playbackSpeed: number;
  setPercentage: (percentage: number) => void;
  setSeek: (seek: number) => void;
  setTotalSeek: (totalSeek: number) => void;
  playVideo: () => void;
  pauseVideo: () => void;
  toggleAutoplay: () => void;
  displayControls: () => void;
  hideControls: () => void;
  setVolume: (volume: number) => void;
  setLoaded: (loaded: number) => void;
  toggleFullscreen: () => void;
  setPlaybackSpeed: (playbackSpeed: number) => void;
};

const initialState = {
  isPlaying: false,
  isAutoplayEnabled: true,
  percentage: 0,
  seek: 0,
  loaded: 0,
  totalSeek: 900,
  percentages: [100],
  showControls: true,
  animatePlay: null,
  volume: 100,
  formattedSeek: "",
  formattedTotal: "",
  isFullscreen: false,
  playbackSpeed: 1,
  setPercentage: () => {},
  setSeek: () => {},
  setTotalSeek: () => {},
  playVideo: () => {},
  pauseVideo: () => {},
  toggleAutoplay: () => {},
  displayControls: () => {},
  hideControls: () => {},
  setVolume: () => {},
  setLoaded: () => {},
  toggleFullscreen: () => {},
  setPlaybackSpeed: () => {},
};

export const ControlsContext = createContext<ControlsState>(initialState);

export function ControlsProvider({ children }: { children: ReactNode }) {
  const [videoState, setVideoState] = useState<ControlsState>(initialState);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setVideoState((prev) => ({
      ...prev,
      seek: prev.totalSeek * (videoState.percentage / 100),
    }));
    if (videoState.percentage >= 100) {
      setVideoState((prev) => ({
        ...prev,
        isPlaying: false,
        showControls: true,
      }));
    }
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

  const setSeek = (seek: number) => {
    setVideoState((prev) => ({
      ...prev,
      seek,
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

  const setLoaded = (loaded: number) => {
    setVideoState((prev) => ({
      ...prev,
      loaded,
    }));
  };

  const setPlaybackSpeed = (playbackSpeed: number) => {
    setVideoState((prev) => ({
      ...prev,
      playbackSpeed,
    }));
  };

  const toggleFullscreen = () => {
    setVideoState((prev) => ({
      ...prev,
      isFullscreen: !prev.isFullscreen,
    }));
  };

  const values = {
    ...videoState,
    formattedSeek: timeFormat(videoState.seek),
    formattedTotal: timeFormat(videoState.totalSeek),
    setPercentage,
    setSeek,
    setTotalSeek,
    playVideo,
    pauseVideo,
    toggleAutoplay,
    displayControls,
    hideControls,
    setVolume,
    setLoaded,
    toggleFullscreen,
    setPlaybackSpeed,
  };

  return (
    <ControlsContext.Provider value={values}>
      {children}
    </ControlsContext.Provider>
  );
}
