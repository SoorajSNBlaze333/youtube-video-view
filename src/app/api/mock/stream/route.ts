import fs from "fs";
import path from "path";
import { NextRequest } from "next/server";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const range = req.headers.get("range");

  if (!range) {
    return new Response("Range header required", { status: 416 });
  }

  const videoPath = path.resolve("./public/video.mp4");
  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;

  const CHUNK_SIZE = 1_000_000;
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, fileSize - 1);

  const headers = {
    "Content-Range": `bytes ${start}-${end}/${fileSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": `${end - start + 1}`,
    "Content-Type": "video/mp4",
    "Cache-Control": "no-store",
  };

  const nodeStream = fs.createReadStream(videoPath, { start, end });

  const webStream = new ReadableStream<Uint8Array>({
    start(controller) {
      nodeStream.on("data", (chunk) =>
        controller.enqueue(new Uint8Array(chunk as Buffer<ArrayBufferLike>))
      );
      nodeStream.on("end", () => controller.close());
      nodeStream.on("error", (err) => controller.error(err));
    },
    cancel() {
      nodeStream.destroy();
    },
  });

  return new Response(webStream, {
    status: 206,
    headers,
  });
}
