import VideoPreview from "./video-preview";

export default function VideosList() {
  return (
    <section className="flex flex-col justify-start items-between gap-1 w-full border-t-[1px] pt-2 border-gray-200 mb-[58px]">
      {new Array(10).fill("Video").map((video, index) => (
        <VideoPreview key={index} video={video} />
      ))}
    </section>
  );
}
