// components
import { Button } from "@/components/ui/button";

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

interface QuestionSectionProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
  image?: string;
}

export default function QuestionSection({
  question,
  options,
  onAnswer,
  image,
}: QuestionSectionProps) {
  const shuffleOptions = (options: string[]): string[] => {
    const shuffledOptions = [...options];
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOptions[i], shuffledOptions[j]] = [
        shuffledOptions[j],
        shuffledOptions[i],
      ];
    }
    return shuffledOptions;
  };

  const shuffledOptions = shuffleOptions(options);

  return (
    <section className="max-w-md p-5 sm:p-0">
      {image && (
        <img src={patternImages[image].src} alt={patternImages[image].alt} />
      )}
      <h2 className="mb-4 text-lg font-semibold sm:text-xl">{question}</h2>
      <section className="space-y-4">
        {shuffledOptions.map((option, index) => (
          <Button
            key={index}
            variant="outline"
            onClick={() => onAnswer(option)}
            className="h-auto w-full text-wrap"
          >
            {option}
          </Button>
        ))}
      </section>
    </section>
  );
}
