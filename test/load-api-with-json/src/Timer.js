import { useEffect } from "react";
export default function Timer({ dispatch, secondsRemaining }) {
  const minute = Math.floor(secondsRemaining / 60).toFixed(0);
  const seconds = (secondsRemaining % 60).toFixed(0);
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  });
  return (
    <p>
      {minute.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
    </p>
  );
}
