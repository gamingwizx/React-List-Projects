import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Answer from "./Answer.js";
function Quiz({ onAddPoints }) {
  const { shuffledAnswers, question } = useSelector((state) => state.quiz);
  const [isAnswered, setIsAnswered] = useState(false);
  const handleAnswered = (answer) => {
    setIsAnswered(true);
    if (question.correctAnswer === answer) {
      onAddPoints();
    }
  };

  const resetAnswer = () => {
    setIsAnswered(false);
  };
  return (
    <>
      {question && question.question && (
        <>
          <p className="quiz-body-title">{question.question.text}</p>
          {shuffledAnswers.map((answer) => (
            <Answer
              onAnswered={(answer) => handleAnswered(answer)}
              answer={answer}
              isAnswered={isAnswered}
              onResetAnswer={() => resetAnswer()}
              correctAnswer={question.correctAnswer}
              key={answer}
            ></Answer>
          ))}
        </>
      )}
    </>
  );
}

export default Quiz;
