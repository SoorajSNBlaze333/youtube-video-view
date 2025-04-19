import VideoPreview from "./video-preview";

export default function VideosList() {
  return (
    <section className="flex flex-col justify-start items-between gap-1 w-full">
      {new Array(10).fill("Video").map((video, index) => (
        <VideoPreview key={index} video={video} />
      ))}
    </section>
  );
}
