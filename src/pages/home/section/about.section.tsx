// components
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AboutSection() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="border border-black">
          Tentang Kami
        </Button>
      </DialogTrigger>
      <DialogContent className="h-auto sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tentang Kami</DialogTitle>
          <DialogDescription>
            Kelompok 3 adalah kelompok mahasiswa dari Universitas Islam
            Kalimantan Muhammad Arsyad Al Banjari Banjarmasin yang beranggotakan
            4 orang
          </DialogDescription>

          <section>
            <p className="font-semibold">Kelompok 3 terdiri dari:</p>
            <ul>
              <li>
                <p>Achmad Yuliadi - 2210010098</p>
              </li>
              <li>
                <p>Baihaqi Fawwaz - 2210010335</p>
              </li>
              <li>
                <p>Khairun Nisa - 2210010297</p>
              </li>
              <li>
                <p>Muhammad Akbar Rizani - 2210010659</p>
              </li>
            </ul>
          </section>

          <DialogFooter>
            <DialogClose asChild>
              <Button>Tutup</Button>
            </DialogClose>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
