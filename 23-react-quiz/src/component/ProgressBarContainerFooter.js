import Label from "./Label.js";
function ProgressBarContainerFooter({
  totalQuestions,
  totalQuestionsAnswered,
  points,
}) {
  const questionsAnswered =
    totalQuestionsAnswered === -1 ? 0 : totalQuestionsAnswered + 1;
  return (
    <div className="progress-bar-container-footer">
      <Label
        context={`Question ${questionsAnswered}/${totalQuestions}`}
      ></Label>
      <Label context={`${points}/${totalQuestions * 15} points`}></Label>
    </div>
  );
}

export default ProgressBarContainerFooter;
