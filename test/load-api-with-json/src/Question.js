import Options from "./Options.js";

export default function Question({ dispatch, userAnswer, question }) {
  return (
    <>
      <p>{question.question}</p>
      <Options
        dispatch={dispatch}
        userAnswer={userAnswer}
        question={question}
      ></Options>
    </>
  );
}
