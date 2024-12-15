import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

// assets
import bayamRaja from "../../../assets/images/pattern/bayam-raja.png";
import bintangBahambur from "../../../assets/images/pattern/bintang-bahambur.png";
import gagatas from "../../../assets/images/pattern/gagatas.png";
import gigiHaruan from "../../../assets/images/pattern/gigi-haruan.png";
import irisPundak from "../../../assets/images/pattern/iris-pundak.png";
import kambangSasaki from "../../../assets/images/pattern/kambang-sasaki.png";
import kembangKacang from "../../../assets/images/pattern/kembang-kacang.png";
import kembangTampuk from "../../../assets/images/pattern/kembang-tampuk-manggis.png";
import kulatKurikit from "../../../assets/images/pattern/kulat-kurikit.png";
import nagaBalimbur from "../../../assets/images/pattern/naga-balimbur.png";
import ombakSinapur from "../../../assets/images/pattern/ombak-sinapur-karang.png";
import turunDayang from "../../../assets/images/pattern/turun-dayang.png";

const patternImages = [
  { src: bayamRaja, alt: "bayam raja" },
  { src: bintangBahambur, alt: "bintang bahambur" },
  { src: gagatas, alt: "gagatas" },
  { src: gigiHaruan, alt: "gigi haruan" },
  { src: irisPundak, alt: "iris pundak" },
  { src: kambangSasaki, alt: "kambang sasaki" },
  { src: kembangKacang, alt: "kembang kacang" },
  { src: kembangTampuk, alt: "kembang tampuk manggis" },
  { src: kulatKurikit, alt: "kulat kurikit" },
  { src: nagaBalimbur, alt: "naga balimbur" },
  { src: ombakSinapur, alt: "ombak sinapur" },
  { src: turunDayang, alt: "turun dayang" },
];

export default function PatternSection() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">4. Motif Sasirangan</Button>
      </DialogTrigger>
      <DialogContent className="h-screen max-w-[800px] sm:h-[65vh]">
        <DialogHeader>
          <DialogTitle>Motif Sasirangan</DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-full pr-2">
          <section className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {patternImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="h-auto w-full rounded border border-gray-200"
              />
            ))}
          </section>
        </ScrollArea>

        <DialogFooter>
          <p>
            Sumber:{" "}
            <a
              target="_blank"
              href="https://id.wikipedia.org/wiki/Sasirangan"
              className="text-blue-400"
            >
              Wikipedia
            </a>
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
