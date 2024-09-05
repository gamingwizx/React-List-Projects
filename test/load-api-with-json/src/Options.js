export default function Options({ dispatch, question, userAnswer }) {
  const hasAnswered = userAnswer !== null;
  return (
    <>
      {question.options.map((option, index) => (
        <button
          className={`${index === userAnswer ? "answer" : ""} ${
            hasAnswered
              ? index === question.answer
                ? "correct-answer"
                : "incorrect-answer"
              : ""
          }`}
          onClick={() => dispatch({ type: "answer", payload: index })}
        >
          {option}
        </button>
      ))}
    </>
  );
}
