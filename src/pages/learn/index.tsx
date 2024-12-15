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

export default function Learn() {
  return (
    <section className="flex size-full flex-col items-center justify-center">
      <section className="flex flex-col items-center justify-center">
        <h1 className="mb-5 text-7xl font-bold">Mari Belajar</h1>
      </section>

      <section className="space-x-2">
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
                  Sasirangan adalah kain tradisional yang berasal dari
                  Kalimantan Selatan yang telah ditetapkan oleh Kementerian
                  Pendidikan dan Kebudayaan sebagai salah satu dari 33 kain
                  tradisional warisan budaya tak benda di Indonesia. Sasirangan
                  berasal dari kata sirang atau manyirang yang dalam bahasa
                  banjar berarti menjelujur atau teknik menjahit menggunakan
                  tangan. Motifnya dibuat dengan jahitan dengan teknik jelujur.
                </p>
                <p>
                  Awalnya, kain sasirangan diyakini dapat mengobati penyakit dan
                  mengusir roh jahat sehingga pembuatannya dibatasi. Namun
                  sekarang, produksi kain sasirangan sudah diperluas dalam
                  berbagai kebutuhan, salah satunya adalah kebutuhan penampilan.
                  Secara umum, pembuatannya masih menggunakan cara tradisional.
                </p>
                <p>
                  Sejak tahun 2010, tradisi Sasirangan secara resmi diakui
                  sebagai salah satu Warisan Budaya Tak benda khas Indonesia
                  dalam bidang Keterampilan dan Kemahiran Kerajinan Tradisional
                  yang berasal dari Kalimantan Selatan.
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

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">2. Sejarah</Button>
          </DialogTrigger>
          <DialogContent className="h-screen sm:h-[65vh]">
            <DialogHeader>
              <DialogTitle className="text-2xl">Sejarah</DialogTitle>
              <DialogDescription hidden />
            </DialogHeader>

            <ScrollArea className="h-full pr-2">
              <article className="space-y-2">
                <p>
                  Sasirangan mulai dibuat sejak abad ke-12 hingga ke-14 Masehi
                  di Kalimantan Selatan. Pembuatannya dikenal dalam cerita
                  rakyat yang membahas tentang masa Kerajaan Negara Dipa. Cerita
                  ini membahas tentang Patih Lambung Mangkurat yang merupakan
                  raja Kerajaan Negara Dipa. Ia bertemu dengan seorang wanita
                  yang bernama Putri Junjung Buih. Keduanya mengadakan
                  perjanjian untuk menikah dengan dua syarat. Syarat pertama
                  adalah membuat sebuah istana yang hanya boleh dikerjakan oleh
                  40 bujangan dalam waktu sehari. Syarat kedua adalah membuat
                  sehelai kain sasirangan berwarna kuning dalam waktu sehari
                  yang hanya boleh dikerjakan oleh 40 perawan. Patih Lambung
                  Mangkurat berhasil memenuhi kedua permintaan ini dan Putri
                  Junjung Buih kemudian mengenakan kain sasirangan tersebut
                  untuk melangsungkan pernikahan di istana yang telah didirikan.
                  Ia meninggalkan Sungai Tabalong yang menjadi tempat
                  persemayamannya dan menikah dengan Patih Lambung serta menjadi
                  permaisuri dari Kerajaan Negara Dipa.
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
                  Sesuai dengan istilah namanya, motif kain sasirangan dibuat
                  dengan menjahit terlebih dahulu kain dengan teknik jelujur.
                  Benang jahitan kemudian ditarik hingga kain mengerut dan
                  setelah itu diberi warna pada jahitan jelujurnya sehingga
                  menghasilkan motif yang cantik. Pada mulanya kain sasirangan
                  hanya dibuat untuk mengobati orang sakit dan mengusir roh
                  jahat, sehingga hanya orang tertentu yang dapat membuat kain
                  ini, tetapi sekarang kain sasirangan dapat dibuat oleh siapa
                  saja asalkan mempunyai keterampilan untuk membuatnya. Saat ini
                  di Kalimantan Selatan banyak sekali pengrajin yang mampu
                  membuat kain sasirangan dengan berbagai motif yang menarik.
                  Pembuatan kain sasirangan umumnya masih dilakukan secara
                  tradisional, mulai dari tahap mendesain motif, merajut,
                  mencelup, membuka rajutan, mencuci dan menyetrika.
                </p>
                <p>
                  Awalnya kain sasirangan diberi warna dengan zat pewarna yang
                  dibuat dari bahan-bahan alami, yakni dari biji, buah, daun,
                  kulit, atau umbi tanaman yang tumbuh liar di hutan atau
                  sengaja ditanam di sekitar tempat tinggal para pembuat kain
                  sasirangan itu sendiri.
                </p>

                <section>
                  <p>
                    Ada 6 warna utama kain sasirangan yang dibuat dari zat
                    pewarna alami dimaksud, yakni :
                  </p>
                  <ul className="list-inside list-disc">
                    <li>
                      Kuning, bahan pembuatnya adalah kunyit atau temulawak.
                    </li>
                    <li>
                      Merah, bahan pembuatnya adalah gambir, buah mengkudu,
                      lombok merah, atau kesumba.
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
                      Coklat, bahan pembuatnya adalah uar atau kulit buah
                      rambutan.
                    </li>
                  </ul>
                </section>

                <p>
                  Supaya warnanya menjadi lebih tua, lebih muda, dan supaya
                  tahan lama (tidak mudah pudar), bahan pewarna di atas kemudian
                  dicampur dengan rempah-rempah lain seperti garam, jintan,
                  lada, pala, cengkeh, jeruk nipis, kapur, tawas, cuka, atau
                  terusi.
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
      </section>
    </section>
  );
}
