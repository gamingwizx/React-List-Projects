export default function Restart({ dispatch }) {
  return <button onClick={() => dispatch({ type: "restart" })}>Restart</button>;
}
