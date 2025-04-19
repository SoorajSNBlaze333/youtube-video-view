import Image from "next/image";

export default function Profile() {
  return (
    <Image
      className="rounded-full h-9 w-9 cursor-pointer"
      src="https://i.pravatar.cc/200"
      alt="youtubeUser"
      height={30}
      width={30}
    />
  );
}
