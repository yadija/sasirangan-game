import { Volume2, VolumeOff } from "lucide-react";
import { useState } from "react";
import useSound from "use-sound";

// assets
import banjar from "@/assets/audios/banjar.mp3";
// components
import { Button } from "@/components/ui/button";

export default function AudioPlayer() {
  const [play, { stop }] = useSound(banjar, {
    volume: 0.8,
    interrupt: true,
  });
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (isPlaying) {
      stop();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="absolute bottom-4 right-4">
      <Button
        variant="secondary"
        size="icon"
        onClick={handleClick}
        className="rounded-full"
      >
        {isPlaying ? <Volume2 /> : <VolumeOff />}
      </Button>
    </section>
  );
}
