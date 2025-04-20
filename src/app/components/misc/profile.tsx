import { useProfile } from "@/app/hooks/use-profile";
import Image from "next/image";

export default function Profile() {
  const {
    profile: { isLoading, picture },
  } = useProfile();

  if (!picture.length || isLoading) {
    return <div className="rounded-full h-9 w-9 bg-gray-300"></div>;
  }

  return (
    <Image
      className="rounded-full h-9 w-9 cursor-pointer"
      src={picture}
      alt="youtubeUser"
      height={30}
      width={30}
    />
  );
}
