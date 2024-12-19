import { Pencil } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { ModeToggle } from "@/components/common/mode-toggle";
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
import { Input } from "@/components/ui/input";

export default function Navbar() {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onSubmit = () => {
    localStorage.setItem("name", name);
    setOpen(false);
    navigate(0);
  };

  return (
    <nav className="absolute flex w-full items-center justify-between gap-2 p-2">
      <section className="flex items-center gap-2">
        {pathname === "/" && (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost">
                <Pencil />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>
                  {localStorage.getItem("name")
                    ? "Ubah Nama"
                    : "Tambahkan Nama"}
                </DialogTitle>
                <DialogDescription>
                  Silahkan masukkan nama anda untuk mengikuti quiz
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-4 items-center gap-4">
                <Input
                  id="name"
                  value={name}
                  placeholder="Masukkan Nama"
                  onChange={(event) => setName(event.target.value)}
                  className="col-span-3"
                />
              </div>

              <DialogFooter>
                <Button type="submit" onClick={onSubmit}>
                  Simpan
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}

        <h1 className="text-sm font-bold sm:text-base">
          {localStorage.getItem("name")
            ? `Halo, ${localStorage.getItem("name")}`
            : "Selamat Datang"}
        </h1>
      </section>

      <ModeToggle />
    </nav>
  );
}
