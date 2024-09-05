export default function ProgressBar({
  totalQuestions,
  index,
  points,
  maxPossiblePoints,
  userAnswer,
}) {
  return (
    <>
      <progress
        max={totalQuestions}
        value={index + Number(!userAnswer === false)}
      ></progress>
      <p>
        Points: {points}/{maxPossiblePoints}
      </p>
      <p>
        Questions: {index + 1}/{totalQuestions}
      </p>
    </>
  );
}
