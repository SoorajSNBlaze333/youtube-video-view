export default function ShortVideo({ short }: { short: string }) {
  return (
    <div className="border-2 col-span-1 aspect-[9/16]  rounded-md flex justify-center items-center">
      {short}
    </div>
  );
}
