import ShortVideo from "./short-video";

export default function Shorts() {
  return (
    <section className="flex flex-col gap-2">
      <p className="text-lg font-bold">Shorts</p>
      <section className="grid grid-cols-3 gap-1">
        {new Array(3).fill("Short").map((item, index) => (
          <ShortVideo key={index} short={item} />
        ))}
      </section>
    </section>
  );
}
