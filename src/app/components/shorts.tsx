import { useShorts } from "../hooks/use-shorts";
import ShortVideo from "./short-video";

export default function Shorts() {
  const { shorts, isLoading } = useShorts();

  if (!isLoading && shorts.length) {
    return (
      <section className="flex flex-col gap-2">
        <p className="text-lg font-bold">Shorts</p>
        <section className="grid grid-cols-3 gap-1">
          {shorts.map((item, index) => (
            <ShortVideo key={index} short={item} />
          ))}
        </section>
      </section>
    );
  }
}
