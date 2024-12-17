import { useEffect, useState } from "react";

import { questions } from "@/pages/quiz/data/questions";
import FinalQuizSection from "@/pages/quiz/section/final-quiz.section";
import QuestionSection from "@/pages/quiz/section/question.section";
import { Question } from "@/types/question.type";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled.slice(0, 10));
  }, []);

  const handleAnswer = (answer: string) => {
    const updatedAnswers = [...userAnswers, answer];
    setUserAnswers(updatedAnswers);

    if (answer === shuffledQuestions[currentQuestionIndex].correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);

      // Store the user's name, score, and finish time in localStorage
      const finishTime = new Date().toLocaleString();
      const leaderboards = JSON.parse(
        localStorage.getItem("leaderboards") || "[]",
      );

      leaderboards.push({
        name: localStorage.getItem("name") || "Pengguna",
        score:
          score +
          (answer === shuffledQuestions[currentQuestionIndex].correct_answer
            ? 1
            : 0),
        finishTime: finishTime,
      });

      localStorage.setItem("leaderboards", JSON.stringify(leaderboards));
    }
  };

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <section className="flex size-full items-center justify-center">
      {showResult ? (
        <FinalQuizSection
          questions={shuffledQuestions}
          userAnswers={userAnswers}
          score={score}
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
