import { useState } from "react";
import { useNavigate } from "react-router";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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

export default function StartButton() {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const onSubmit = () => {
    localStorage.setItem("name", name);
    setOpen(false);
    navigate(0);
  };

  if (!localStorage.getItem("name"))
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Mulai Quiz</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Tambahkan Nama</DialogTitle>
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
    );

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Mulai Quiz</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Mulai Quiz</AlertDialogTitle>
          <AlertDialogDescription>
            Selesaikan 10 pertanyaan dan pilihlah jawaban yang paling tepat
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction onClick={() => navigate("/quiz")}>
            Lanjut
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
