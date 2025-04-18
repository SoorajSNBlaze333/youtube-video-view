export default function VideoTags() {
  return (
    <section className="flex justify-start items-center gap-2 overflow-x-auto">
      {new Array(4).fill(1).map((item, index) => (
        <div key={index} className="border-2 rounded-md min-w-20 text-center">
          {item}
        </div>
      ))}
    </section>
  );
}
