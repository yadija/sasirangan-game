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

export default function MakingSection() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">3. Cara Pembuatan</Button>
      </DialogTrigger>
      <DialogContent className="h-screen sm:h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Cara Pembuatan</DialogTitle>
          <DialogDescription hidden />
        </DialogHeader>

        <ScrollArea className="h-full pr-2">
          <article className="space-y-2">
            <p>
              Sesuai dengan istilah namanya, motif kain sasirangan dibuat dengan
              menjahit terlebih dahulu kain dengan teknik jelujur. Benang
              jahitan kemudian ditarik hingga kain mengerut dan setelah itu
              diberi warna pada jahitan jelujurnya sehingga menghasilkan motif
              yang cantik. Pada mulanya kain sasirangan hanya dibuat untuk
              mengobati orang sakit dan mengusir roh jahat, sehingga hanya orang
              tertentu yang dapat membuat kain ini, tetapi sekarang kain
              sasirangan dapat dibuat oleh siapa saja asalkan mempunyai
              keterampilan untuk membuatnya. Saat ini di Kalimantan Selatan
              banyak sekali pengrajin yang mampu membuat kain sasirangan dengan
              berbagai motif yang menarik. Pembuatan kain sasirangan umumnya
              masih dilakukan secara tradisional, mulai dari tahap mendesain
              motif, merajut, mencelup, membuka rajutan, mencuci dan menyetrika.
            </p>
            <p>
              Awalnya kain sasirangan diberi warna dengan zat pewarna yang
              dibuat dari bahan-bahan alami, yakni dari biji, buah, daun, kulit,
              atau umbi tanaman yang tumbuh liar di hutan atau sengaja ditanam
              di sekitar tempat tinggal para pembuat kain sasirangan itu
              sendiri.
            </p>

            <section>
              <p>
                Ada 6 warna utama kain sasirangan yang dibuat dari zat pewarna
                alami dimaksud, yakni :
              </p>
              <ul className="list-inside list-disc">
                <li>Kuning, bahan pembuatnya adalah kunyit atau temulawak.</li>
                <li>
                  Merah, bahan pembuatnya adalah gambir, buah mengkudu, lombok
                  merah, atau kesumba.
                </li>
                <li>
                  Hijau, bahan pembuatnya adalah daun pudak atau jahe Hitam,
                  bahan pembuatnya adalah kabuau atau uar.
                </li>
                <li>
                  Ungu, bahan pembuatnya adalah biji buah gandaria (bahasa
                  Banjar Ramania).
                </li>
                <li>
                  Coklat, bahan pembuatnya adalah uar atau kulit buah rambutan.
                </li>
              </ul>
            </section>

            <p>
              Supaya warnanya menjadi lebih tua, lebih muda, dan supaya tahan
              lama (tidak mudah pudar), bahan pewarna di atas kemudian dicampur
              dengan rempah-rempah lain seperti garam, jintan, lada, pala,
              cengkeh, jeruk nipis, kapur, tawas, cuka, atau terusi.
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
            </a>{" "}
            &{" "}
            <a
              target="_blank"
              href="https://irmasasirangan.com/artikel/sasirangan-sejarah--perkembangan-motif-sasirangan-kekinian"
              className="text-blue-400"
            >
              Irma Sasirangan
            </a>
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
