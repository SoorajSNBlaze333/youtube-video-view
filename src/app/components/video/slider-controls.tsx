import { useControls } from "@/app/hooks/use-controls";

export default function SliderControls({
  handleSeek,
}: {
  handleSeek: (value: string) => void;
}) {
  const { percentage, loaded, isPlaying, playVideo, pauseVideo } =
    useControls();

  return (
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
        <div className="h-1 bg-red-600" style={{ width: `${percentage}%` }} />
      </div>
      <div className="absolute w-full px-4 -z-20">
        <div
          className="h-1 bg-gray-300/60"
          style={{
            left: `${percentage}%`,
            width: `${Math.min(100, percentage + (loaded - percentage))}%`,
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
  );
}
