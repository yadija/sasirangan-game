interface FinalQuizSectionProps {
  questions: { question: string; correct_answer: string }[];
  userAnswers: string[];
}

export default function FinalQuizSection({
  questions,
  userAnswers,
}: FinalQuizSectionProps) {
  return (
    <section>
      <h2 className="mb-4 text-center text-2xl font-bold">Hasil Quiz</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index} className="mb-2">
            <p className="font-semibold">{question.question}</p>
            <p
              className={`${
                userAnswers[index] === question.correct_answer
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              Jawaban Anda: {userAnswers[index]}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
