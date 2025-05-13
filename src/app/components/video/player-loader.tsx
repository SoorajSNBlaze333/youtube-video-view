import { Loader } from "../misc/loader";

export default function PlayerLoader() {
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-black flex justify-center items-center">
      <Loader />
    </div>
  );
}
