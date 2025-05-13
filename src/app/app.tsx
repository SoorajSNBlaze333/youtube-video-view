import ActiveVideo from "./components/video";
import Navbar from "./components/auth/navbar";
import { Comments } from "./components/comments/comments";
import Shorts from "./components/shorts";
import VideoMetadata from "./components/video-metadata";
import VideoTags from "./components/video-tags";
import VideosList from "./components/videos-list";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="py-6 px-6 xxl:px-20 grid grid-cols-1 md:grid-cols-6 xxl:grid-cols-8 gap-6 h-full overflow-y-scroll">
        <section className="col-span-1 md:col-span-4 xxl:col-span-6">
          <ActiveVideo />
          <VideoMetadata />
          <Comments />
        </section>
        <section className="col-span-1 md:col-span-2 flex flex-col gap-6">
          <VideoTags />
          <Shorts />
          <VideosList />
        </section>
      </div>
    </>
  );
}
