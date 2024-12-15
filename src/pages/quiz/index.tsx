import { useEffect, useState } from "react";

import { questions } from "@/pages/quiz/data/questions";
import FinalQuizSection from "@/pages/quiz/section/final-quiz.section";
import QuestionSection from "@/pages/quiz/section/question.section";

interface Question {
  question: string;
  options: string[];
  correct_answer: string;
}

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled.slice(0, 10)); // set 10 questions
  }, []);

  const handleAnswer = (answer: string) => {
    const updatedAnswers = [...userAnswers, answer];
    setUserAnswers(updatedAnswers);

    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <section className="flex size-full items-center justify-center">
      {showResult ? (
        <FinalQuizSection
          questions={shuffledQuestions}
          userAnswers={userAnswers}
        />
      ) : (
        currentQuestion && (
          <QuestionSection
            question={currentQuestion.question}
            options={currentQuestion.options}
            onAnswer={handleAnswer}
          />
        )
      )}
    </section>
  );
}