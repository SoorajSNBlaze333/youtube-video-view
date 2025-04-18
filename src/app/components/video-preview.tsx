export default function VideoPreview({ video }: { video: string }) {
  return (
    <div className="grid grid-cols-11 gap-2 mb-2">
      <div className="col-span-5 rounded-lg bg-slate-500 min-h-28" />
      <div className="col=span-6 flex flex-col justify-start">{video}</div>
    </div>
  );
}
