import { useRouter } from "next/router";
import { useEffect } from "react";

export default function WatchStream() {
  const router = useRouter();
  const { stream } = router.query;

  useEffect(() => {
    if (typeof window !== "undefined" && stream) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/clappr@latest/dist/clappr.min.js";
      script.onload = () => {
        // @ts-ignore
        new Clappr.Player({
          source: `https://ssh101stream.ssh101.com/akamaissh101/ssh101/${stream}/playlist.m3u8`,
          parentId: "#player",
          width: "100%",
          height: "100%",
          autoPlay: true,
          mute: false
        });
      };
      document.body.appendChild(script);
    }
  }, [stream]);

  return (
    <div className="w-screen h-screen bg-black text-white">
      <div id="player" className="w-full h-full"></div>
    </div>
  );
}