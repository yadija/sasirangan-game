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

export default function HistorySection() {
  return (
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
              Sasirangan mulai dibuat sejak abad ke-12 hingga ke-14 Masehi di
              Kalimantan Selatan. Pembuatannya dikenal dalam cerita rakyat yang
              membahas tentang masa Kerajaan Negara Dipa. Cerita ini membahas
              tentang Patih Lambung Mangkurat yang merupakan raja Kerajaan
              Negara Dipa. Ia bertemu dengan seorang wanita yang bernama Putri
              Junjung Buih. Keduanya mengadakan perjanjian untuk menikah dengan
              dua syarat. Syarat pertama adalah membuat sebuah istana yang hanya
              boleh dikerjakan oleh 40 bujangan dalam waktu sehari. Syarat kedua
              adalah membuat sehelai kain sasirangan berwarna kuning dalam waktu
              sehari yang hanya boleh dikerjakan oleh 40 perawan. Patih Lambung
              Mangkurat berhasil memenuhi kedua permintaan ini dan Putri Junjung
              Buih kemudian mengenakan kain sasirangan tersebut untuk
              melangsungkan pernikahan di istana yang telah didirikan. Ia
              meninggalkan Sungai Tabalong yang menjadi tempat persemayamannya
              dan menikah dengan Patih Lambung serta menjadi permaisuri dari
              Kerajaan Negara Dipa.
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
