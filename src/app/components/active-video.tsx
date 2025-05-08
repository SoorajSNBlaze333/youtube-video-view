import { CommentsProvider } from "../context/comment-context";
import VideoMetadata from "./video-metadata";
import Controls from "./video/controls";

export default function ActiveVideo() {
  return (
    <section className="col-span-1 md:col-span-4 xxl:col-span-6">
      <Controls>
        <div
          className="bg-no-repeat bg-cover flex justify-center items-center aspect-video relative"
          style={{ backgroundImage: `url("video-preview-1.jpg")` }}
        ></div>
      </Controls>
      <CommentsProvider>
        <VideoMetadata />
      </CommentsProvider>
    </section>
  );
}
