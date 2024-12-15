import { Button } from "@/components/ui/button";

interface QuestionSectionProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
}

export default function QuestionSection({
  question,
  options,
  onAnswer,
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
    <section className="max-w-md">
      <h2 className="mb-4 text-xl font-semibold">{question}</h2>
      <section className="space-y-4">
        {shuffledOptions.map((option, index) => (
          <Button
            key={index}
            variant="outline"
            onClick={() => onAnswer(option)}
            className="w-full text-wrap"
          >
            {option}
          </Button>
        ))}
      </section>
    </section>
  );
}
