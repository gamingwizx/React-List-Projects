import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TIME_LIMIT_SECONDS, TIME_LIMIT_MINUTES } from "../constants.js";
import { setStartGame, setTimer, setIsTimeout } from "../reducers/reducer.js";
function Timer({ onTimeout }) {
  const [minutes, setMinutes] = useState(TIME_LIMIT_MINUTES);
  const [seconds, setSeconds] = useState(TIME_LIMIT_SECONDS);
  const dispatch = useDispatch();
  const { startGame } = useSelector((state) => state.quiz);

  useEffect(() => {
    if (startGame === true) {
      setMinutes(TIME_LIMIT_MINUTES);
      setSeconds(TIME_LIMIT_SECONDS);
    }
  }, [startGame]);

  useEffect(() => {
    if (startGame === false) return;
    onTimeout(seconds, minutes);
    let interval;
    interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((seconds) => seconds - 1);
      } else if (minutes > 0) {
        setMinutes((minutes) => minutes - 1);
        setSeconds(59);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, minutes]);

  return (
    <div className="timer">
      <label>
        {minutes}:{seconds.toString().padStart(2, "0")}
      </label>
    </div>
  );
}

export default Timer;
