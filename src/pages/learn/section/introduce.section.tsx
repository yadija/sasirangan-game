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

export default function IntroduceSection() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">1. Pengenalan</Button>
      </DialogTrigger>
      <DialogContent className="h-screen sm:h-[65vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Pengenalan</DialogTitle>
          <DialogDescription hidden />
        </DialogHeader>

        <ScrollArea className="h-full pr-2">
          <article className="space-y-2">
            <p>
              Sasirangan adalah kain tradisional yang berasal dari Kalimantan
              Selatan yang telah ditetapkan oleh Kementerian Pendidikan dan
              Kebudayaan sebagai salah satu dari 33 kain tradisional warisan
              budaya tak benda di Indonesia. Sasirangan berasal dari kata sirang
              atau manyirang yang dalam bahasa banjar berarti menjelujur atau
              teknik menjahit menggunakan tangan. Motifnya dibuat dengan jahitan
              dengan teknik jelujur.
            </p>
            <p>
              Awalnya, kain sasirangan diyakini dapat mengobati penyakit dan
              mengusir roh jahat sehingga pembuatannya dibatasi. Namun sekarang,
              produksi kain sasirangan sudah diperluas dalam berbagai kebutuhan,
              salah satunya adalah kebutuhan penampilan. Secara umum,
              pembuatannya masih menggunakan cara tradisional.
            </p>
            <p>
              Sejak tahun 2010, tradisi Sasirangan secara resmi diakui sebagai
              salah satu Warisan Budaya Tak benda khas Indonesia dalam bidang
              Keterampilan dan Kemahiran Kerajinan Tradisional yang berasal dari
              Kalimantan Selatan.
            </p>
          </article>
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
