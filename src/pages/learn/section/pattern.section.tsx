import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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

export default function PatternSection() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">4. Motif Sasirangan</Button>
      </DialogTrigger>
      <DialogContent className="h-screen max-w-[800px] sm:h-[65vh]">
        <DialogHeader>
          <DialogTitle>Motif Sasirangan</DialogTitle>
          <DialogDescription hidden />
        </DialogHeader>

        <ScrollArea className="h-full pr-2">
          <section className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <img src={bayamRaja} alt="bayam raja" className="h-auto w-full" />
            <img
              src={bintangBahambur}
              alt="bintang bahambur"
              className="h-auto w-full"
            />
            <img src={gagatas} alt="gagatas" className="h-auto w-full" />
            <img src={gigiHaruan} alt="gigi haruan" className="h-auto w-full" />
            <img src={irisPundak} alt="iris pundak" className="h-auto w-full" />
            <img
              src={kambangSasaki}
              alt="kambang sasaki"
              className="h-auto w-full"
            />
            <img
              src={kembangKacang}
              alt="kembang kacang"
              className="h-auto w-full"
            />
            <img
              src={kembangTampuk}
              alt="kembang tampuk manggis"
              className="h-auto w-full"
            />
            <img
              src={kulatKurikit}
              alt="kulat kurikit"
              className="h-auto w-full"
            />
            <img
              src={nagaBalimbur}
              alt="naga balimbur"
              className="h-auto w-full"
            />
            <img
              src={ombakSinapur}
              alt="ombak sinapur"
              className="h-auto w-full"
            />
            <img
              src={turunDayang}
              alt="turun dayang"
              className="h-auto w-full"
            />
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
