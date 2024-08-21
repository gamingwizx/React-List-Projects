import { useState, useEffect } from "react";

function Answer({
  answer,
  correctAnswer,
  isAnswered,
  onResetAnswer,
  onAnswered,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [style, setStyle] = useState({});
  const isCorrectAnswer = answer === correctAnswer;

  const correctStyle = {
    backgroundColor: "var(--color-theme)",
    color: "var(--color-light)",
  };
  const incorrectStyle = {
    backgroundColor: "var(--color-accent)",
    color: "var(--color-hovered)",
  };
  const hoveredStyle = {
    backgroundColor: "var(--color-hovered)",
    transform: "translateX(20px)",
  };

  const onHandleAnswered = () => {
    onAnswered(answer);
  };

  useEffect(() => {
    if (isHovered === true && isAnswered === false) setStyle(hoveredStyle);
    if (isHovered === false && isAnswered === false)
      setStyle((style) => {
        return {};
      });

    if (isAnswered === false) return;
    if (isCorrectAnswer === true)
      setStyle((style) => {
        return { ...correctStyle, transform: style.transform };
      });
    else
      setStyle((style) => {
        return { ...incorrectStyle, transform: style.transform };
      });
  }, [isAnswered, isHovered]);

  useEffect(() => {
    setStyle(() => {
      return {};
    });
    setIsHovered(false);
    onResetAnswer();
  }, [answer]);

  return (
    <div
      style={style}
      onClick={(e) => onHandleAnswered()}
      onMouseEnter={() => {
        setIsHovered(() => {
          return true;
        });
      }}
      onMouseLeave={() => setIsHovered(false)}
      className="answer"
    >
      <label>{answer}</label>
    </div>
  );
}

export default Answer;
