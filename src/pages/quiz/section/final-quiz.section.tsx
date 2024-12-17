import { Link } from "react-router";

import { AlertDialogHeader } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface FinalQuizSectionProps {
  questions: { question: string; correct_answer: string }[];
  userAnswers: string[];
  score: number;
}

export default function FinalQuizSection({
  questions,
  userAnswers,
  score,
}: FinalQuizSectionProps) {
  return (
    <section className="text-center">
      <h2 className="mb-4 text-xl font-semibold">Hasil Quiz</h2>
      <p className="mb-4">
        Skor Anda: {score} / {questions.length}
      </p>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full">
            Lihat Jawaban
          </Button>
        </DialogTrigger>

        <DialogContent className="h-[65vh] sm:max-w-[425px]">
          <AlertDialogHeader>
            <DialogTitle>Lihat Jawaban</DialogTitle>
            <DialogDescription />
          </AlertDialogHeader>

          <ScrollArea className="h-full pr-2">
            <ul className="space-y-4">
              {questions.map((question, index) => (
                <li key={index}>
                  <p className="font-semibold">{question.question}</p>
                  <p
                    className={`${
                      userAnswers[index] === question.correct_answer
                        ? "text-green-700"
                        : "text-red-600"
                    }`}
                  >
                    Jawaban Anda: {userAnswers[index]}
                  </p>
                </li>
              ))}
            </ul>
          </ScrollArea>

          <DialogFooter>
            <DialogClose asChild>
              <Button>Tutup</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <section className="mt-4 flex flex-col gap-4 sm:flex-row">
        <Button variant="outline" asChild>
          <Link to="/">Halaman Utama</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/leaderboards">Lihat Peringkat</Link>
        </Button>
      </section>
    </section>
  );
}
