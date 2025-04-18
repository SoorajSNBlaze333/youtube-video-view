import ActiveVideo from "./components/active-video";
import Shorts from "./components/shorts";
import VideoTags from "./components/video-tags";
import VideosList from "./components/videos-list";

export default function App() {
  return (
    <div className="py-6 px-6 xxl:px-20 grid grid-cols-1 md:grid-cols-6 xxl:grid-cols-8 gap-6 h-full">
      <ActiveVideo />
      <section className="col-span-1 md:col-span-2 flex flex-col gap-6">
        <VideoTags />
        <Shorts />
        <VideosList />
      </section>
    </div>
  );
}
