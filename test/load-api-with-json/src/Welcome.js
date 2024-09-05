export default function Welcome({ dispatch }) {
  return (
    <button onClick={() => dispatch({ type: "start" })}>Start Quiz</button>
  );
}
