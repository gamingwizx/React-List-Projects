import { useEffect, useState } from "react";
export default function NextButton({
  dispatch,
  index,
  totalQuestions,
  userAnswer,
}) {
  const isFinish = index + 1 === totalQuestions ? true : false;
  const [buttonName, setButtonName] = useState("");
  useEffect(() => {
    if (isFinish) {
      setButtonName("Finish");
    } else {
      setButtonName("Next");
    }
  }, [userAnswer]);
  if (!userAnswer) return;
  const handleNext = () => {
    if (isFinish) {
      dispatch({ type: "finishQuestion" });
    } else {
      dispatch({ type: "nextQuestion" });
    }
  };
  return <button onClick={() => handleNext()}>{buttonName}</button>;
}
