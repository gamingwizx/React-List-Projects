export default function Finish({ points, maxPossiblePoints }) {
  const percentCompleted = ((points / maxPossiblePoints) * 100).toFixed(2);
  return (
    <p>
      You have scored {points} out of {maxPossiblePoints}. ({percentCompleted}%)
    </p>
  );
}
