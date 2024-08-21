import Timer from "./Timer.js";
import Modal from "./Modal.js";
import Label from "./Label.js";
import Button from "./Button.js";
import QuizHeader from "./QuizHeader.js";
import QuizBody from "./QuizBody.js";
import QuizFooter from "./QuizFooter.js";
import Quiz from "./Quiz.js";
import ProgressBarContainer from "./ProgressBarContainer.js";
import ProgressBar from "./ProgressBar.js";
import ProgressBarContainerFooter from "./ProgressBarContainerFooter.js";
import { POINTS_ON_CORRECT } from "../constants.js";
import {
  quizRestart,
  fetchAPI,
  incrementIndex,
  shuffle,
  getCurrentQuestion,
  setIndex,
  setStartGame,
  addPoints,
  setPoints,
  setIsTimeout,
} from "../reducers/reducer.js";
import { addLineBreak } from "../utils.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
function QuizContainer() {
  const { questions, index, question, startGame, isTimeout, points } =
    useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const controller = useRef(null);
  const endMessage = useRef("");

  useEffect(() => {
    if (controller.current !== null) return controller.current.abort();
    controller.current = new AbortController();
    try {
      dispatch(fetchAPI());
    } catch (error) {
      console.error(error);
    }
  }, [startGame, dispatch]);

  useEffect(() => {
    if (startGame === false) controller.current = null;
  }, [startGame]);

  useEffect(() => {
    if (questions.length === 0) return;
    dispatch(setIndex(0));
  }, [questions, dispatch]);

  useEffect(() => {
    if (index <= -1) return;
    dispatch(getCurrentQuestion());
  }, [index, dispatch]);

  useEffect(() => {
    if (!question) return;
    dispatch(shuffle());
  }, [question, dispatch]);

  const handleNextQuestion = () => {
    if (index >= questions.length - 1) {
      dispatch(setStartGame(false));
      dispatch(setIsTimeout(true));
      endMessage.current = `You have completed the quiz \n Points earned: \n ${points} / ${
        questions.length * 15
      }`;
    }
    dispatch(incrementIndex());
  };

  const handleTimeout = (seconds, minutes) => {
    if (seconds <= 0 && minutes <= 0) {
      dispatch(setStartGame(false));
      dispatch(setIsTimeout(true));
      endMessage.current = "Time is up!";
      return;
    }
  };

  const handleQuizRestart = () => {
    dispatch(setStartGame(true));
    dispatch(setIsTimeout(false));
    dispatch(setIndex(-1));
    dispatch(setPoints(0));
  };

  return (
    <section className="react-quiz-container">
      <QuizHeader />
      <div className="quiz-container">
        <ProgressBarContainer>
          <ProgressBar
            totalQuestions={questions.length}
            totalQuestionsAnswered={index}
          />
          <ProgressBarContainerFooter
            totalQuestions={questions.length}
            totalQuestionsAnswered={index}
            points={points}
          />
        </ProgressBarContainer>
        <QuizBody>
          {startGame === true && questions.length === 0 && <p>Loading...</p>}
          {startGame === true && (
            <Quiz onAddPoints={() => dispatch(addPoints())}></Quiz>
          )}
        </QuizBody>
        <QuizFooter>
          <Timer onTimeout={handleTimeout} />
          <Button
            context="Next"
            classname="next"
            disabled={startGame === false}
            onClick={() => handleNextQuestion()}
          />
        </QuizFooter>
      </div>
      {isTimeout === true && (
        <Modal>
          <Label
            key="timeout-label"
            context={addLineBreak(endMessage.current)}
            classname="modal-text"
          ></Label>
          <Button
            classname="restart-button"
            onClick={() => handleQuizRestart()}
            context="Restart"
          ></Button>
        </Modal>
      )}
    </section>
  );
}

export default QuizContainer;
