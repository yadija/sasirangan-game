import { ChartNoAxesColumn, House, ListChecks } from "lucide-react";
import { useNavigate } from "react-router";

// components
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

// assets
import bayamRaja from "../../../assets/images/nopattern/bayam-raja.jpeg";
import bintangBahambur from "../../../assets/images/nopattern/bintang-bahambur.jpeg";
import gagatas from "../../../assets/images/nopattern/gagatas.jpeg";
import gigiHaruan from "../../../assets/images/nopattern/gigi-haruan.jpeg";
import irisPundak from "../../../assets/images/nopattern/iris-pundak.jpeg";
import kambangSasaki from "../../../assets/images/nopattern/kambang-sasaki.jpeg";
import kembangKacang from "../../../assets/images/nopattern/kembang-kacang.jpeg";
import kembangTampuk from "../../../assets/images/nopattern/kembang-tampuk-manggis.jpeg";
import kulatKurikit from "../../../assets/images/nopattern/kulat-kurikit.jpeg";
import nagaBalimbur from "../../../assets/images/nopattern/naga-balimbur.jpeg";
import ombakSinapur from "../../../assets/images/nopattern/ombak-sinapur-karang.jpeg";
import turunDayang from "../../../assets/images/nopattern/turun-dayang.jpeg";

interface PatternImages {
  [key: string]: {
    src: string;
    alt: string;
  };
}

const patternImages: PatternImages = {
  "bayam-raja": {
    src: bayamRaja,
    alt: "bayam raja",
  },
  "bintang-bahambur": {
    src: bintangBahambur,
    alt: "bintang bahambur",
  },
  gagatas: {
    src: gagatas,
    alt: "gagatas",
  },
  "gigi-haruan": {
    src: gigiHaruan,
    alt: "gigi haruan",
  },
  "iris-pundak": {
    src: irisPundak,
    alt: "iris pundak",
  },
  "kambang-sasaki": {
    src: kambangSasaki,
    alt: "kambang sasaki",
  },
  "kembang-kacang": {
    src: kembangKacang,
    alt: "kembang kacang",
  },
  "kembang-tampuk-manggis": {
    src: kembangTampuk,
    alt: "kembang tampuk manggis",
  },
  "kulat-kurikit": {
    src: kulatKurikit,
    alt: "kulat kurikit",
  },
  "naga-balimbur": {
    src: nagaBalimbur,
    alt: "naga balimbur",
  },
  "ombak-sinapur-karang": {
    src: ombakSinapur,
    alt: "ombak sinapur karang",
  },
  "turun-dayang": {
    src: turunDayang,
    alt: "turun dayang",
  },
};

interface FinalQuizSectionProps {
  questions: { question: string; correct_answer: string; image?: string }[];
  userAnswers: string[];
  score: number;
}

export default function FinalQuizSection({
  questions,
  userAnswers,
  score,
}: FinalQuizSectionProps) {
  const navigate = useNavigate();

  return (
    <section className="text-center">
      <h2 className="mb-4 text-xl font-semibold">Hasil Quiz</h2>
      <p className="mb-4">
        Skor Anda: {score} / {questions.length}
      </p>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full">
            <ListChecks />
            Lihat Jawaban
          </Button>
        </DialogTrigger>

        <DialogContent className="h-[65vh] sm:max-w-[425px]">
          <AlertDialogHeader>
            <DialogTitle>Lihat Jawaban</DialogTitle>
            <DialogDescription />
          </AlertDialogHeader>

          <ScrollArea className="h-full pr-2">
            <ul className="space-y-5">
              {questions.map((question, index) => (
                <li key={index}>
                  {question.image && (
                    <img
                      src={patternImages[question.image].src}
                      alt={patternImages[question.image].alt}
                      className="rounded-md border border-black"
                    />
                  )}
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
        <Button variant="outline" onClick={() => navigate("/")}>
          <House /> Halaman Utama
        </Button>
        <Button variant="outline" onClick={() => navigate("/leaderboards")}>
          <ChartNoAxesColumn /> Lihat Peringkat
        </Button>
      </section>
    </section>
  );
}
