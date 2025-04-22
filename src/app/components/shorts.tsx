import { useVideo } from "../hooks/use-video";
import ShortVideo from "./short-video";

export default function Shorts() {
  const {
    video: { related_shorts },
  } = useVideo();

  return (
    <section className="flex flex-col gap-2">
      <p className="text-lg font-bold">Shorts</p>
      <section className="grid grid-cols-3 gap-1">
        {related_shorts.map((item, index) => (
          <ShortVideo key={index} short={item} />
        ))}
      </section>
    </section>
  );
}
