function ProgressBar({ totalQuestions, totalQuestionsAnswered }) {
  return (
    <progress
      value={totalQuestionsAnswered + 1}
      max={totalQuestions}
      className="progress-bar"
    ></progress>
  );
}

export default ProgressBar;
